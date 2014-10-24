	var imageAry = [
		{
			id:"sister",
			src:"static/images/sister.png"
		},
		{
			id:"you",
			src:"static/images/you.png"
		},
		{
			id:"ball",
			src:"static/images/ball.png"
		},
		{
			id:"demo1",
			src:"static/images/demo1.jpg"
		},
		{
			id:"sky",
			src:"static/images/sky.png"
		},
		{
			id:"tree",
			src:"static/images/tree.png"
		},
		{
			id:"grass",
			src:"static/images/grass.png"
		}
	],
	body,
	loadingDiv,
	readyDiv,
	mainDiv,
	imageJson,
	list=0,
	listCol=0,
	lastTime=0,//记录最后执行动画时间
	lastUpTime=0,//记录最后执行动画时间
	lastTime=0,//记录最后执行动画时间
	other;
	
	
	//初始化游戏
	body = new Body("demo");
	
	imgLoad({
		imageAry:imageAry,
		callCenter:gameLoader,
		callReady:gameReady
	});
	
	
	function gameLoader(i,j){
		//声明图层 声明精灵 并添加
		var loadingDiv = new Div();
		body.addDiv({
			"loadingDiv":loadingDiv
		});
		var background = new Sprite();
		var text = new Sprite();
		loadingDiv.addSprite({
			"background":background,
			"text":text
		});
		//精灵
		background
			.width(body.width)
			.height(body.height);
		background.painter = function(){
			this.fillStyle("black")
				.fillRect();
		};
		text
			.width(body.width)
			.height(body.height);
		text.painter = function(){
			this.fillStyle("white")
				.textAlign("center")
				.textBaseline("middle")
				.font("bold 20px/40px Georgia")
				.fillText(i+"/"+j);
		};
		//主层绘制
		loadingDiv.childClearDraw();
	}

	function gameReady(data){
		body.data = data;
		
		//声明图层 声明精灵 并添加
		var readyDiv = new Div();
		body.addDiv({
			"readyDiv":readyDiv
		});
		var background = new Sprite();
		var start = new Sprite();
		readyDiv.addSprite({
			"background":background,
			"start":start
		});
		
		
		//精灵
		background
			.width(body.width)
			.height(body.height);
		background.painter = function(){
			this.fillStyle("black")
				.fillRect();
		};
		
		start
			.width(100)
			.height(40)
			.x(body.width/2 - 100/2)
			.y(body.height/2 - 40/2);
		start.painter = function(){
				this.fillStyle("#aaa")
					.fillRect()
					.fillStyle("#fff")
					.textAlign("center")
					.textBaseline("middle")
					.fillText("开始");
		};
		start.on("click",startClick);
		function startClick(event){
			if(!mouseToSprite(event,start)){return false;};
			start.off("click",startClick);//取消事件
			gameStar();//运行游戏开始
		}
		//绘制层
		readyDiv.childClearDraw();
	}
	
	function gameStar(){
		
		//声明图层 声明精灵 并添加
		var mainDiv = new Div();
		body.addDiv({
			"mainDiv":mainDiv
		});
		var you = new Sprite();
		var sister = new Sprite();
		var ball = new Sprite();
		var line = new Sprite();
		
		var sky = new Sprite();
		var tree = new Sprite();
		var grass = new Sprite();
		
		
		var S_grid = new Sprite();
		var S_fps = new Sprite();
		mainDiv.addSprite({
			"sky":sky,
			"tree":tree,
			"grass":grass,
			"you":you,
			"sister":sister,
			"ball":ball,
			"line":line,
			"S_grid":S_grid,
			"S_fps":S_fps
		});
		
		
		//精灵
		list = dyadicArray(1900,100,1,19);
		you
			.dom(body.data["you"])
			.sx(list[0][0].x)
			.sy(list[0][0].y)
			.swidth(100)
			.sheight(100)
			.x(0)
			.y(200)
			.width(100)
			.height(100);
		you.painter = function(){
			this.drawImage();
		};
		you.addAction("cast");
		you.action["cast"].speed(50);
		you.action["cast"].aNumber = 0;
		you.action["cast"].action = function(){
			var self  = this;
			var sprite = self.sprite;
			var ball = body.find("ball");
			sprite.sx(list[0][self.aNumber].x)
				.sy(list[0][self.aNumber].y);
			if(self.aNumber>=18){
				self.actioning(0);
				self.aNumber = 0;
			}else{
				self.aNumber++;
				if(self.aNumber == 12){
					ball.action["fire"].setVelocity();
					ball.visible = 1;
					ball.action["fire"].actioning(1);
				} 
			}
		};
		
		sister
			.dom(body.data["sister"])
			.width(body.data["sister"].width)
			.height(body.data["sister"].height)
			.x(470)
			.y(250);
		sister.anim = 0;
		sister.animStarTime = 1000;
		sister.animFps = 0;
		sister.animSpeedX = 1;
		sister.animSpeedY = 0;
		sister.animSpeedG = 0;
		sister.animLastTime = (+new Date);
		sister.painter = function(){
			this.drawImage();
		};
		
		
		ball.dom(body.data["ball"])
			.width(body.data["ball"].width)
			.height(body.data["ball"].height)
			.x(42)
			.y(244);
		ball.baseX=42;
		ball.baseY=244;
		ball.visible=0;
		ball.s_pixelToMeter = 32;	//px/m
		ball.s_gravity = 30;		//重力加速度   m/s
		ball.angle = 0;			//角度
		ball.wind = 0;			//风速
		ball.velocity  = 0;		//发射x速度   m/s
		ball.s_velocityX = 0;		//发射x速度   m/s
		ball.s_velocityY = 0;		//发射y速度 m/s

		ball.painter = function(){
			this.drawImage();
		};
		ball.addAction("fire");
		ball.action["fire"].speed(0);
		ball.action["fire"].setVelocity = function(){
			var self = this;
			var sprite = self.sprite;
			sprite.s_velocityX = Math.cos(sprite.angle*Math.PI/180)*sprite.velocity*sprite.s_pixelToMeter;
			sprite.s_velocityY = Math.sin(sprite.angle*Math.PI/180)*sprite.velocity*sprite.s_pixelToMeter;
		};
		ball.action["fire"].action = function(){
			var self = this;
			var sprite = self.sprite;
			sprite.s_velocityY = sprite.s_gravity + sprite.s_velocityY;
			sprite.s_velocityX = sprite.wind/10 + sprite.s_velocityX;
			sprite.x(sprite._x + (sprite.s_velocityX/5/body.fps))
				.y(sprite._y + (sprite.s_velocityY/5/body.fps));
			self.remove();
		};
		ball.action["fire"].remove = function(){//判断移除方法
			var self = this;
			var sprite = self.sprite;
			if(sprite._y > 500 || sprite._x > 500 || sprite._y <-500 || sprite._x<-500){
				sprite.visible = 0;
				self.actioning(0);
				sprite.x(sprite.baseX)//初始化球的X轴与Y轴
					.y(sprite.baseY);
				body.find("line").randomWind();//重新随机风力
			}
		};
		
		line.baseX = 40;
		line.baseY = 240;
		line.angle = 0;
		line.velocity = 0;
		line.wind = Math.floor(Math.random()*100-50);	//风速
		line.width(0)
			.height(0)
			.x(0)
			.y(20);
		line.painter = function(){
			var self = this;
			self.moveTo(self.baseX,self.baseY)
				.lineTo(self.lineX,self.lineY)
				.strokeStyle("#333")
				.stroke();
			self.textAlign("left")
				.textBaseline("top")
				.y(20)
				.beginPath()	
				.fillText("力量:"+line.velocity)   //转成按100计算
				.y(40)
				.beginPath()
				.fillText("角度:"+line.angle)
				.y(60)
				.beginPath()
				.fillText("风力:"+line.wind);
		};
		line.addAction("move");
		line.action["move"].actioning(1);
		line.action["move"].action = function(){
			var self = this;
			var sprite = self.sprite;
			//设置线条终点
			sprite.lineX = sprite.nx+sprite.baseX;
			sprite.lineY = sprite.ny+sprite.baseY;
			//设置力量角度
			sprite.angle = Math.floor(Math.atan(sprite.ny/sprite.nx)*180/Math.PI);
			sprite.velocity = Math.floor(line.nz*100/200);
		};
		line.randomWind = function(){
			var self = this;
			self.wind = Math.floor(Math.random()*100-50);
		};
		
		
		
		sky
			.dom(body.data["sky"])
			.x(0)
			.y(0)
			.width(body.data["sky"].width)
			.height(body.data["sky"].height);
		sky.offsetLeft = 0;
		sky.painter = function(){
			var self = this;
			self.translate(self.offsetLeft,0);
			body.ctx.drawImage(self.dom(),0,0);
			body.ctx.drawImage(self.dom(),1024,0);
		};
		sky.addAction("frame");
		sky.action["frame"].actioning(1);
		sky.action["frame"].action = function(){
			var self = this;
			var sprite =self.sprite;
			sprite.offsetLeft = sprite.offsetLeft - 8/body.fps;
			sprite.offsetLeft = sprite.offsetLeft > -1020 ? sprite.offsetLeft : sprite.offsetLeft+1020;
		};
		
		tree
			.dom(body.data["tree"])
			.x(0)
			.y(0)
			.width(body.data["tree"].width)
			.height(body.data["tree"].height);
		tree.offsetLeft = 0;
		tree.painter = function(){
			var self = this;
			self.translate(self.offsetLeft,138);
			body.ctx.drawImage(self.dom(),0,0);
			body.ctx.drawImage(self.dom(),200,0);
			body.ctx.drawImage(self.dom(),400,0);
			body.ctx.drawImage(self.dom(),600,0);
		};
		tree.addAction("frame");
		tree.action["frame"].actioning(1);
		tree.action["frame"].action = function(){
			var self = this;
			var sprite = self.sprite;
			sprite.offsetLeft = sprite.offsetLeft - 16/body.fps;
			sprite.offsetLeft = sprite.offsetLeft > -200 ? sprite.offsetLeft : sprite.offsetLeft+200;
			
		};	
		
			
		grass
			.dom(body.data["grass"])
			.x(0)
			.y(0)
			.width(body.data["grass"].width)
			.height(body.data["grass"].height);
		grass.offsetLeft = 0;
		grass.painter = function(){
			var self = this;
			self.translate(self.offsetLeft,250);
			body.ctx.drawImage(self.dom(),0,0);
			body.ctx.drawImage(self.dom(),1000,0);
		};
		grass.addAction("frame");
		grass.action["frame"].actioning(1);
		grass.action["frame"].action = function(){
			var self = this;
			var sprite = self.sprite;
			sprite.offsetLeft = sprite.offsetLeft - 100/body.fps;
			sprite.offsetLeft = sprite.offsetLeft > -1000 ? sprite.offsetLeft : sprite.offsetLeft+1000;
		};		
		
		
		
		
		S_grid.painter = function(){
			drawGrid(this,20);
		};
		
		S_fps.width(0)
			.height(0)
			.x(0)
			.y(0)
			.fillStyle("#999");
		S_fps.painter = function(){
			body.fps = calculateFps();
			this.textAlign("left")
				.textBaseline("top")
				.fillText("FPS:"+body.fps.toFixed());
		};
		//层添加精灵
		mainDiv.childClearDraw();
		body.dom.addEventListener("click",mainDivClick,false);
		body.dom.addEventListener("mousemove",mainDivMove,false);
		requestAnimationFrame(mainDivFrame);
	}
	function mainDivFrame(){
		if(!body.paused){
			body.now = (+new Date);
			body.fps = calculateFps(body.now);
			body.find("mainDiv")
				.update()
				.childClearDraw();
		}
		requestAnimationFrame(mainDivFrame);
	}
	function mainDivClick(event){
		var you = body.find("you");
		var line = body.find("line");
		var ball = body.find("ball");
		ball.angle=line.angle;
		ball.velocity=line.velocity;
		ball.wind=line.wind;
		you.action["cast"].actioning(1);
	}
	function mainDivMove(event){
		var line = body.find("line");
		var x = event.offsetX - line.baseX;
		var y = event.offsetY - line.baseY;
		var z = Math.sqrt(x*x+y*y);
		line.nz = z > 200 ? 200 : z;
		line.nx = line.nz*x/z;
		line.ny = line.nz*y/z;
	}
	