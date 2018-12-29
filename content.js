    let app = document.createElement('div');
	app.id = "chrome_app"
	app.text = "Hey there"
	document.body.insertBefore(app,document.body.childNodes[0]);


	let images = document.getElementsByTagName('img'); 
	let src = [];

	for (let item of images) {
    	src.push(item.src);
    }

    for(let i = 0 ; i < src.length ; i++)
	{
		let outerDiv = document.createElement('div');
		outerDiv.id = "outerDiv_" + i;
		let elem = document.createElement("img");
		elem.setAttribute("src", src[i]);
		elem.class = "img_chrome";
		let link = document.createElement('a');
		link.id = "linkDiv_" + i;	
		//elem.setAttribute("width", "100");
		document.getElementById("chrome_app").appendChild(outerDiv);
		document.getElementById(outerDiv.id).appendChild(link);	
		document.getElementById(link.id).appendChild(elem);
		$('#' + link.id).data("download" , "image" + i);
		$('#' + link.id).data("href" , src[i]);

		$('#' + link.id).click(function() {
  			
  			this.download = $(this).data("download");
 			this.href = $(this).data("href");
 			this.click();
		});
	}



