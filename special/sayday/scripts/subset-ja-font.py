# Builds public/fonts/zen-kaku-medium-ja.woff2: the app's Japanese font (Zen Kaku Gothic New Medium, OFL) cut down to
# all kana and Japanese punctuation plus every kanji used on the Japanese pages, so the pages load a small file.
# Run it after changing Japanese text (after build-ja.mjs), from the portfolio root:
#   python3 special/sayday/scripts/subset-ja-font.py      (needs: pip install fonttools brotli)
import pathlib, re
from fontTools import subset

here = pathlib.Path(__file__).resolve().parent
public = here.parent / 'public'
source = here.parents[1] / 'balloon-words/fonts/zen-kaku/Medium.ttf'
target = public / 'fonts/zen-kaku-medium-ja.woff2'

text = ''.join(p.read_text(encoding='utf-8') for p in (public / 'ja').rglob('*.html'))
used = set(re.findall(r'[㐀-䶿一-鿿豈-﫿]', text))
always = [chr(c) for r in ((0x3000, 0x303f), (0x3040, 0x30ff), (0x31f0, 0x31ff), (0xff00, 0xffef)) for c in range(r[0], r[1] + 1)]

options = subset.Options()
options.flavor = 'woff2'
options.layout_features = ['*']
font = subset.load_font(str(source), options)
subsetter = subset.Subsetter(options)
subsetter.populate(text=''.join(sorted(used)) + ''.join(always))
subsetter.subset(font)
subset.save_font(font, str(target), options)
print(f'{target.relative_to(public)}: {len(used)} kanji, {target.stat().st_size // 1024} KB')
