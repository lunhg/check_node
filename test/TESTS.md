# TOC
   - [node check version](#node-check-version)
<a name=""></a>
 
<a name="node-check-version"></a>
# node check version
should get node version from which command.

```js
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
```

