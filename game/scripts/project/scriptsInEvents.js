


const scriptsInEvents = {

	async GameSheet_Event239_Act2(runtime, localVars)
	{
		console.log(localVars.vValue)
		window.parent.postMessage(localVars.vValue, '*')
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

