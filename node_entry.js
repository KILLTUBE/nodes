import node_t from "./node_t.js";
import signal_proxy from "./signal_proxy.js";

export default class node_entry extends node_t
{
	constructor()
	{
		super("entry point / main");
		this.remove_all_inputs();
		this.remove_all_outputs();
		this.add_signal("output");
		this.output = new signal_proxy(this,"output",function(){});
	}
};