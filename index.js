(()=>{var e={792:(e,t,s)=>{const{Router:a}=s(127),{addOperationRoutes:o}=s(824),r=[s(844),s(20),s(38),s(818),s(943),s(298),s(85)],n=[s(524),s(905),s(90),s(637),s(219),s(181),s(633)],i=a();n.forEach(((e,t)=>{o(i,r[t],e)})),e.exports=i},672:(e,t,s)=>{const a=s(479),o=s(127),r=s(792),n=s(934),i=o();n.authenticate().then((async()=>{console.log("[32mDB Connected Sucessfully![0m")})).catch((e=>console.error(e))),i.use(a()).use(o.urlencoded({extended:!0})).use(o.json({limit:process.env.BODY_SIZE})).use("/api",r).get("/",((e,t)=>t.send("<h1>Welcome to Generated API 👋 </h1>"))),e.exports=i},85:(e,t,s)=>{const{Controller:a}=s(295),{Equipment:o,Movement:r,Place:n}=s(883);e.exports=new class extends a{constructor(){super(o)}all=async({query:e},t)=>{const{page:s=0,limit:a=10,placeId:i}=e;try{let e=await o.findAll({offset:s*a,limit:Number.parseInt(a),include:["unit",{model:n,as:"places",include:["type"],where:i?{id:i}:null,through:{attributes:[]}},{model:r,as:"movements",include:["reason",{model:n,as:"placeTo",include:["type"]},{model:n,as:"placeFrom",include:["type"]}]}]});return t.status(200).json(e)}catch(e){return console.error(e),t.status(500).json(this.defaultErrorMessage)}};find=async({params:e},t)=>{try{let s=await o.findOne({where:{id:e.id},include:["unit",{model:n,as:"places",include:["type"],through:{attributes:[]}},{model:r,as:"movements",include:["reason",{model:n,as:"placeTo",include:["type"]},{model:n,as:"placeFrom",include:["type"]}]}]});return t.status(200).json(s)}catch(e){return console.error(e),t.status(500).json(this.defaultErrorMessage)}}}},943:(e,t,s)=>{const{Controller:a}=s(295),{Place:o,Type:r,Movement:n,Equipment:i}=s(883);e.exports=new class extends a{constructor(){super(o)}all=async({query:e},t)=>{const{page:s=0,limit:a=10}=e;try{let e=await r.findOne({order:[["id","ASC"]]});return o.findAll({offset:s*a,limit:Number.parseInt(a),where:{Typeid:e.getDataValue("id")},include:["type","users","tasks",{model:o,as:"places",include:["type","users","tasks"],through:{attributes:[]}}]}).then((e=>t.status(200).json(e))).catch((e=>(console.error(e),t.status(500).json(this.defaultErrorMessage))))}catch(e){return console.error(e),t.status(500).json(this.defaultErrorMessage)}};find=async({params:e},t)=>o.findOne({where:{id:e.id},include:["type","users","tasks",{model:o,as:"places",include:["type","users","tasks"],through:{attributes:[]}}]}).then((e=>t.status(200).json(e))).catch((e=>(console.log(e),t.status(500).json(this.defaultErrorMessage))))}},298:(e,t,s)=>{const{Controller:a}=s(295),{Reason:o}=s(883);e.exports=new class extends a{constructor(){super(o)}}},20:(e,t,s)=>{const{Controller:a}=s(295),{Task:o}=s(883);e.exports=new class extends a{constructor(){super(o)}}},38:(e,t,s)=>{const{Controller:a}=s(295),{Type:o}=s(883);e.exports=new class extends a{constructor(){super(o)}find=async({params:e},t)=>o.findOne({where:{id:e.id},include:["places"]}).then((e=>t.status(200).json(e))).catch((e=>(console.error(e),t.status(500).json(this.defaultErrorMessage))))}},818:(e,t,s)=>{const{Controller:a}=s(295),{Unit:o}=s(883);e.exports=new class extends a{constructor(){super(o)}}},844:(e,t,s)=>{const{Controller:a}=s(295),{User:o}=s(883);e.exports=new class extends a{constructor(){super(o)}}},804:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(11),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},description:{key:"description",type:o.TEXT},code:{key:"code",type:o.STRING(100),unique:!0},photoUrl:{key:"photoUrl",type:o.STRING(255),allowNull:!0},state:{key:"state",type:o.STRING(50)},observations:{key:"observations",type:o.TEXT,allowNull:!0},Unitid:{key:"Unitid",type:o.INTEGER(11),references:{key:"id",model:"Unit"}}},{sequelize:r,tableName:"Equipment",deletedAt:!0,timestamps:!0}),e.exports=n},441:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(11),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},Reasonid:{key:"Reasonid",type:o.INTEGER(11),references:{key:"id",model:"Reason"}},description:{key:"description",type:o.TEXT,allowNull:!0},Equipmentid:{key:"Equipmentid",type:o.INTEGER(11),references:{key:"id",model:"Equipment"}},placeFrom_id:{key:"placeFrom_id",type:o.INTEGER(10),allowNull:!0,references:{key:"id",model:"Place"}},placeTo_id:{key:"placeTo_id",type:o.INTEGER(10),allowNull:!0,references:{key:"id",model:"Place"}}},{sequelize:r,tableName:"Movement",deletedAt:!1,timestamps:!1}),e.exports=n},66:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},code:{key:"code",type:o.STRING(20),unique:!0},name:{key:"name",type:o.STRING(255)},description:{key:"description",type:o.STRING(255),allowNull:!0},Typeid:{key:"Typeid",type:o.INTEGER(10),references:{key:"id",model:"Type"}},photoUrl:{key:"photoUrl",type:o.STRING(255),allowNull:!0}},{sequelize:r,tableName:"Place",deletedAt:!0,timestamps:!0}),e.exports=n},123:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({placeParent_id:{key:"placeParent_id",type:o.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}},placeChild_id:{key:"placeChild_id",type:o.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}}},{sequelize:r,tableName:"Place_Place",deletedAt:!1,timestamps:!1}),e.exports=n},212:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(11),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:o.STRING(20),unique:!0}},{sequelize:r,tableName:"Reason",deletedAt:!0,timestamps:!0}),e.exports=n},977:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:o.STRING(50)},description:{key:"description",type:o.STRING(255),allowNull:!0},deadLine:{key:"deadLine",type:o.DATE},status:{key:"status",type:o.BOOLEAN},Placeid:{key:"Placeid",type:o.INTEGER(10),allowNull:!0,references:{key:"id",model:"Place"}},photoUrl:{key:"photoUrl",type:o.STRING(255),allowNull:!0}},{sequelize:r,tableName:"Task",deletedAt:!0,timestamps:!0}),e.exports=n},756:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:o.STRING(50),unique:!0}},{sequelize:r,tableName:"Type",deletedAt:!0,timestamps:!0}),e.exports=n},108:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(11),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:o.STRING(10),unique:!0}},{sequelize:r,tableName:"Unit",deletedAt:!0,timestamps:!0}),e.exports=n},348:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({id:{key:"id",type:o.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},uid:{key:"uid",type:o.STRING(50),unique:!0},name:{key:"name",type:o.STRING(50)},email:{key:"email",type:o.STRING(50),unique:!0},verifiedEmail:{key:"verifiedEmail",type:o.STRING(50),unique:!0},photoUrl:{key:"photoUrl",type:o.STRING(255),allowNull:!0},password:{key:"password",type:o.STRING(255)},phoneNumber:{key:"phoneNumber",type:o.STRING(20),allowNull:!0}},{sequelize:r,tableName:"User",deletedAt:!0,timestamps:!0}),e.exports=n},458:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({Userid:{key:"Userid",type:o.INTEGER(10),primaryKey:!0,references:{key:"id",model:"User"}},Placeid:{key:"Placeid",type:o.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}},startTime:{key:"startTime",type:o.INTEGER(5)},endTime:{key:"endTime",type:o.INTEGER(5)},startDate:{key:"startDate",type:o.DATE},endDate:{key:"endDate",type:o.DATE}},{sequelize:r,tableName:"User_Place",deletedAt:!1,timestamps:!1}),e.exports=n},78:(e,t,s)=>{const{Model:a,DataTypes:o}=s(121),r=s(934);class n extends a{}n.init({Userid:{key:"Userid",type:o.INTEGER(10),primaryKey:!0,references:{key:"id",model:"User"}},Taskid:{key:"Taskid",type:o.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Task"}},startDate:{key:"startDate",type:o.DATE},endDate:{key:"endDate",type:o.DATE}},{sequelize:r,tableName:"User_Task",deletedAt:!1,timestamps:!1}),e.exports=n},295:(e,t,s)=>{const{Model:a}=s(121),{Request:o,Response:r}=s(127),n=s(934),i={status:500,message:"⚠️ Oops!, Something goes Wrong !!⚠️"};e.exports={Controller:class{constructor(e){this.model=e,this.defaultErrorMessage=i}all=async(e,t)=>this.model.findAll().then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),t.status(500).json(i))));find=async(e,t)=>this.model.findOne({where:{id:e.params.id}}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),t.status(500).json(i))));save=async(e,t)=>{let s=await n.transaction({autocommit:!0});return this.model.upsert(e.body,{transaction:s}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),await s.rollback(),t.status(500).json(i))))};destroy=async(e,t)=>{let s=await n.transaction({autocommit:!0});return this.model.destroy({transaction:s,where:{id:e.params.id}}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),await s.rollback(),t.status(500).json(i))))}},defaultErrorMessage:i}},883:(e,t,s)=>{const a=s(348),o=s(977),r=s(756),n=s(108),i=s(66),l=s(212),d=s(441),p=s(78),c=s(804),y=s(458),u=s(123);i.belongsToMany(i,{through:u,foreignKey:"placeChild_id",as:"supPlaces"}),i.belongsToMany(i,{through:u,foreignKey:"placeParent_id",as:"places"}),i.belongsToMany(c,{through:d,foreignKey:"placeTo_id",as:"equipments"}),c.belongsToMany(i,{through:d,foreignKey:"Equipmentid",as:"places"}),i.belongsTo(r,{foreignKey:"Typeid",as:"type"}),r.hasMany(i,{foreignKey:"Typeid",as:"places"}),i.hasMany(o,{foreignKey:"Placeid",as:"tasks"}),o.belongsTo(i,{foreignKey:"Placeid",as:"place"}),i.belongsToMany(a,{through:y,foreignKey:"Userid",as:"users"}),a.belongsToMany(i,{through:y,foreignKey:"Placeid",as:"places"}),a.belongsToMany(o,{through:p,foreignKey:"Taskid",as:"tasks"}),o.belongsToMany(a,{through:p,foreignKey:"Userid",as:"users"}),d.belongsTo(l,{foreignKey:"Reasonid",as:"reason"}),l.hasMany(d,{foreignKey:"Reasonid",as:"movements"}),d.belongsTo(c,{foreignKey:"Equipmentid",as:"equipment"}),c.hasMany(d,{foreignKey:"Equipmentid",as:"movements"}),d.belongsTo(i,{foreignKey:"placeFrom_id",as:"placeFrom"}),i.hasMany(d,{foreignKey:"placeFrom_id",as:"movementsFrom"}),d.belongsTo(i,{foreignKey:"placeTo_id",as:"placeTo"}),i.hasMany(d,{foreignKey:"placeTo_id",as:"movementsTo"}),c.belongsTo(n,{foreignKey:"Unitid",as:"unit"}),n.hasMany(c,{foreignKey:"Unitid",as:"equipments"}),e.exports={User:a,Task:o,Type:r,Unit:n,Place:i,Reason:l,Movement:d,User_Task:p,Equipment:c,User_Place:y,Place_Place:u}},824:e=>{const t={read:(e,t,s)=>e.get(`/${t}`,s.all),show:(e,t,s)=>e.get(`/${t}/:id`,s.find),create:(e,t,s)=>e.post(`/${t}`,s.save),update:(e,t,s)=>e.post(`/${t}/:id`,s.save),delete:(e,t,s)=>e.delete(`/${t}/:id`,s.destroy)};e.exports={addOperationRoutes:(e,s,{route:a,operations:o})=>{o.forEach((o=>{t[o](e,a,s)}))}}},934:(e,t,s)=>{const{Sequelize:a}=s(121);s(334).config(),e.exports=new a(process.env.DATABASE_URL,{logging:!1,define:{paranoid:!0,defaultScope:{attributes:{exclude:["createdAt","updatedAt","deletedAt"]}}},pool:{idle:1e4,acquire:36e5}})},479:e=>{"use strict";e.exports=require("cors")},334:e=>{"use strict";e.exports=require("dotenv")},127:e=>{"use strict";e.exports=require("express")},121:e=>{"use strict";e.exports=require("sequelize")},633:e=>{"use strict";e.exports=JSON.parse('{"route":"equipments","operations":["read","show","create","update","delete"]}')},219:e=>{"use strict";e.exports=JSON.parse('{"route":"places","operations":["read","show","create","update","delete"]}')},181:e=>{"use strict";e.exports=JSON.parse('{"route":"reasons","operations":["read","show","create","update","delete"]}')},905:e=>{"use strict";e.exports=JSON.parse('{"route":"tasks","operations":["read","show","create","update","delete"]}')},90:e=>{"use strict";e.exports=JSON.parse('{"route":"types","operations":["read","show","create","update","delete"]}')},637:e=>{"use strict";e.exports=JSON.parse('{"route":"units","operations":["read","show","create","update","delete"]}')},524:e=>{"use strict";e.exports=JSON.parse('{"route":"users","operations":["read","show","create","update","delete"]}')}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(()=>{const e=s(672);s(334).config(),e.listen(process.env.PORT||3e3,(()=>{console.log(`Server running on [33mhttp://${process.env.HOST}:${process.env.PORT}[0m`),console.log(new Date)}))})()})();