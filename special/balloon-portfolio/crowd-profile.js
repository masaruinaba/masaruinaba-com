// Opt-in local profiling; no telemetry or work on the normal production path.
export function createProfile(renderer){
  if(!new URLSearchParams(location.search).has('profile'))return null;
  const gl=renderer.getContext(),ext=gl.getExtension('EXT_disjoint_timer_query_webgl2');
  let query=null,active=false,start=0;
  const cpu=[],gpu=[];
  const report=()=>{const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;document.body.dataset.profile=JSON.stringify({cpuMs:avg(cpu),gpuMs:avg(gpu),samples:cpu.length,gpuSamples:gpu.length});};
  return {
    begin(){
      if(query&&gl.getQueryParameter(query,gl.QUERY_RESULT_AVAILABLE)){
        if(!gl.getParameter(ext.GPU_DISJOINT_EXT)){gpu.push(gl.getQueryParameter(query,gl.QUERY_RESULT)/1e6);if(gpu.length>120)gpu.shift();}
        gl.deleteQuery(query);query=null;
      }
      if(ext&&!query){query=gl.createQuery();gl.beginQuery(ext.TIME_ELAPSED_EXT,query);active=true;}
      start=performance.now();
    },
    end(){if(active){gl.endQuery(ext.TIME_ELAPSED_EXT);active=false;}cpu.push(performance.now()-start);if(cpu.length>120)cpu.shift();report();}
  };
}
