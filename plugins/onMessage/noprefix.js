// coded by @aryannix. 

const noPrefix = ["ai", "gemini","help","imgur", "video","drive","accept","out","pending","sendnoti","restart","offbot","join","ran","setmony","spem","unsend","note","refresh","setjoin","setlave","tagall","wran","support","kick","language","balance","bank","colors","send","spin"] //names that does not need a prefix


async function onCall(methods) {
  const {commands} = global.plugins;
  methods.args = methods.message.args.slice(1)
  const called = methods.message.args[0]?.toLowerCase()
  if(noPrefix.includes(called)) {
    
    commands.forEach((cmd,name) => {
      if(name == called.toLowerCase() ) {
        return cmd(methods)
      }
    })
    
    
  }
}

export default {
  onCall
}
