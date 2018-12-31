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
		elem.title = "Click to download";
		//link.id = "linkDiv_" + i;	
		//elem.setAttribute("width", "100");
		document.getElementById("chrome_app").appendChild(outerDiv);
		document.getElementById(outerDiv.id).appendChild(elem);	
		//document.getElementById(link.id).appendChild(elem);
		$('#' + outerDiv.id).data("download" , "image" + i);
		$('#' + outerDiv.id).data("href" , src[i]);

		$('#' + outerDiv.id).click(function(event) {			
			let link = document.createElement('a');
  			link.target = "_self"
  			link.download = $(this).data("download");
 			link.href = $(this).data("href");
 			link.click();
		});
	}



