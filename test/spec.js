const which_node = require("../index");
const should = require("should");

describe("node check version", () => {

    it("should get node version from which command", (done) => {
	return which_node((err, data) => {
	    if(!err){
		let reg = new RegExp(".*/bin/node")
		data.should.match(reg);
		done()
	    }
	    else{
		done(err);
	    }
	});
    })
})
