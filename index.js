(()=>{var e={792:(e,t,s)=>{const{Router:r}=s(127),{addOperationRoutes:a}=s(824),o=[s(844),s(20),s(38),s(943),s(640),s(85)],n=[s(524),s(905),s(90),s(219),s(959),s(633)],i=r();n.forEach(((e,t)=>{a(i,o[t],e)})),e.exports=i},672:(e,t,s)=>{const r=s(479),a=s(127),o=s(792),n=s(934),i=a();n.authenticate().then((async()=>{console.log("[32mDB Connected Sucessfully![0m")})).catch((e=>console.error(e))),i.use(r()).use(a.urlencoded({extended:!0})).use(a.json({limit:process.env.BODY_SIZE})).use("/api",o).get("/",((e,t)=>t.send("<h1>Welcome to Generated API 👋 </h1>"))),e.exports=i},85:(e,t,s)=>{const{Controller:r}=s(295),{Equipment:a}=s(883);e.exports=new class extends r{constructor(){super(a)}}},640:(e,t,s)=>{const{Controller:r}=s(295),{Movement:a}=s(883);e.exports=new class extends r{constructor(){super(a)}}},943:(e,t,s)=>{const{Controller:r}=s(295),{Place:a,Type:o}=s(883);e.exports=new class extends r{constructor(){super(a)}all=async({query:e},t)=>{let{page:s=0,limit:r=10}=e;try{let e=await o.findOne({order:[["id","ASC"]]});return a.findAll({limit:r,offset:s*r,where:{Typeid:e.getDataValue("id")},include:["type","users","tasks",{model:a,as:"places",include:["type","users","tasks"],through:{attributes:[]}}]}).then((e=>t.status(200).json(e))).catch((e=>(console.error(e),t.status(500).json(this.defaultErrorMessage))))}catch(e){return console.error(e),t.status(500).json(this.defaultErrorMessage)}};find=async({params:e},t)=>a.findOne({where:{id:e.id},include:["type","users","tasks",{model:a,as:"places",include:["type","users","tasks"],through:{attributes:[]}}]}).then((e=>t.status(200).json(e))).catch((e=>(console.log(e),t.status(500).json(this.defaultErrorMessage))))}},20:(e,t,s)=>{const{Controller:r}=s(295),{Task:a}=s(883);e.exports=new class extends r{constructor(){super(a)}}},38:(e,t,s)=>{const{Controller:r}=s(295),{Type:a}=s(883);e.exports=new class extends r{constructor(){super(a)}find=async({params:e},t)=>a.findOne({where:{id:e.id},include:["places"]}).then((e=>t.status(200).json(e))).catch((e=>(console.error(e),t.status(500).json(this.defaultErrorMessage))))}},844:(e,t,s)=>{const{Controller:r}=s(295),{User:a}=s(883);e.exports=new class extends r{constructor(){super(a)}}},66:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("Place",{id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},code:{key:"code",type:r.STRING(20),unique:!0},name:{key:"name",type:r.STRING(255)},description:{key:"description",type:r.STRING(255),allowNull:!0},Typeid:{key:"Typeid",type:r.INTEGER(10),references:{key:"id",model:"Type"}},photoUrl:{key:"photoUrl",type:r.STRING(255),allowNull:!0}},{tableName:"Place",deletedAt:!0,timestamps:!0})},123:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("Place_Place",{placeParent_id:{key:"placeParent_id",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}},placeChild_id:{key:"placeChild_id",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}}},{tableName:"Place_Place",deletedAt:!1,timestamps:!1})},977:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("Task",{id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:r.STRING(50)},description:{key:"description",type:r.STRING(255),allowNull:!0},deadLine:{key:"deadLine",type:r.DATE},status:{key:"status",type:r.BOOLEAN},Placeid:{key:"Placeid",type:r.INTEGER(10),allowNull:!0,references:{key:"id",model:"Place"}},photoUrl:{key:"photoUrl",type:r.STRING(255),allowNull:!0}},{tableName:"Task",deletedAt:!0,timestamps:!0})},756:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("Type",{id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:r.STRING(50),unique:!0}},{tableName:"Type",deletedAt:!0,timestamps:!0})},348:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("User",{id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},uid:{key:"uid",type:r.STRING(50),unique:!0},name:{key:"name",type:r.STRING(50)},email:{key:"email",type:r.STRING(50),unique:!0},verifiedEmail:{key:"verifiedEmail",type:r.STRING(50),unique:!0},photoUrl:{key:"photoUrl",type:r.STRING(255),allowNull:!0},password:{key:"password",type:r.STRING(255)},phoneNumber:{key:"phoneNumber",type:r.STRING(20),allowNull:!0}},{tableName:"User",deletedAt:!0,timestamps:!0})},458:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("User_Place",{Userid:{key:"Userid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"User"}},Placeid:{key:"Placeid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}},startTime:{key:"startTime",type:r.INTEGER(5)},endTime:{key:"endTime",type:r.INTEGER(5)},startDate:{key:"startDate",type:r.DATE},endDate:{key:"endDate",type:r.DATE}},{tableName:"User_Place",deletedAt:!1,timestamps:!1})},78:(e,t,s)=>{const{DataTypes:r}=s(121),a=s(934);e.exports=a.define("User_Task",{Userid:{key:"Userid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"User"}},Taskid:{key:"Taskid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Task"}},startDate:{key:"startDate",type:r.DATE},endDate:{key:"endDate",type:r.DATE}},{tableName:"User_Task",deletedAt:!1,timestamps:!1})},295:(e,t,s)=>{const{Model:r}=s(121),{Request:a,Response:o}=s(127),n=s(934),i={status:500,message:"⚠️ Oops!, Something goes Wrong !!⚠️"};e.exports={Controller:class{constructor(e){this.model=e,this.defaultErrorMessage=i}all=async(e,t)=>this.model.findAll().then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),t.status(500).json(i))));find=async(e,t)=>this.model.findOne({where:{id:e.params.id}}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),t.status(500).json(i))));save=async(e,t)=>{let s=await n.transaction({autocommit:!0});return this.model.upsert(e.body,{transaction:s}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),await s.rollback(),t.status(500).json(i))))};destroy=async(e,t)=>{let s=await n.transaction({autocommit:!0});return this.model.destroy({transaction:s,where:{id:e.params.id}}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),await s.rollback(),t.status(500).json(i))))}},defaultErrorMessage:i}},883:(e,t,s)=>{const r=s(348),a=s(977),o=s(756),n=s(66),i=s(78),l=s(458),d=s(123);n.belongsToMany(n,{through:d,foreignKey:"placeChild_id",as:"supPlaces"}),n.belongsToMany(n,{through:d,foreignKey:"placeParent_id",as:"places"}),n.belongsTo(o,{foreignKey:"Typeid",as:"type"}),o.hasMany(n,{foreignKey:"Typeid",as:"places"}),n.hasMany(a,{foreignKey:"Placeid",as:"tasks"}),a.belongsTo(n,{foreignKey:"Placeid",as:"place"}),n.belongsToMany(r,{through:l,foreignKey:"Userid",as:"users"}),r.belongsToMany(n,{through:l,foreignKey:"Placeid",as:"places"}),r.belongsToMany(a,{through:i,foreignKey:"Taskid",as:"tasks"}),a.belongsToMany(r,{through:i,foreignKey:"Userid",as:"users"}),e.exports={User:r,Task:a,Type:o,Place:n,User_Task:i,User_Place:l,Place_Place:d}},824:e=>{const t={read:(e,t,s)=>e.get(`/${t}`,s.all),show:(e,t,s)=>e.get(`/${t}/:id`,s.find),create:(e,t,s)=>e.post(`/${t}`,s.save),update:(e,t,s)=>e.post(`/${t}/:id`,s.save),delete:(e,t,s)=>e.delete(`/${t}/:id`,s.destroy)};e.exports={addOperationRoutes:(e,s,{route:r,operations:a})=>{a.forEach((a=>{t[a](e,r,s)}))}}},934:(e,t,s)=>{const{Sequelize:r}=s(121);s(334).config(),e.exports=new r(process.env.DATABASE_URL,{define:{paranoid:!0,defaultScope:{attributes:{exclude:["createdAt","updatedAt","deletedAt"]}}}})},479:e=>{"use strict";e.exports=require("cors")},334:e=>{"use strict";e.exports=require("dotenv")},127:e=>{"use strict";e.exports=require("express")},121:e=>{"use strict";e.exports=require("sequelize")},633:e=>{"use strict";e.exports=JSON.parse('{"route":"equipments","operations":["read","show","create","update","delete"]}')},959:e=>{"use strict";e.exports=JSON.parse('{"route":"movements","operations":["read","show","create","update","delete"]}')},219:e=>{"use strict";e.exports=JSON.parse('{"route":"places","operations":["read","show","create","update","delete"]}')},905:e=>{"use strict";e.exports=JSON.parse('{"route":"tasks","operations":["read","show","create","update","delete"]}')},90:e=>{"use strict";e.exports=JSON.parse('{"route":"types","operations":["read","show","create","update","delete"]}')},524:e=>{"use strict";e.exports=JSON.parse('{"route":"users","operations":["read","show","create","update","delete"]}')}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}(()=>{const e=s(672);s(334).config(),e.listen(process.env.PORT||3e3,(()=>{console.log(`Server running on [33mhttp://${process.env.HOST}:${process.env.PORT}[0m`),console.log(new Date)}))})()})();