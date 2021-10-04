(()=>{var e={792:(e,t,s)=>{const{Router:a}=s(127),{addOperationRoutes:r}=s(824),o=[s(844),s(20),s(38),s(943)],n=[s(524),s(905),s(90),s(219)],i=a();n.forEach(((e,t)=>{r(i,o[t],e)})),e.exports=i},672:(e,t,s)=>{const a=s(479),r=s(127),o=s(792),n=s(934),i=r();n.authenticate().then((async()=>{console.log("[32mDB Connected Sucessfully![0m")})).catch((e=>console.error(e))),i.use(a()).use(r.urlencoded({extended:!0})).use(r.json({limit:process.env.BODY_SIZE})).use("/api",o).get("/",((e,t)=>t.send("<h1>Welcome to Generated API 👋 </h1>"))),e.exports=i},943:(e,t,s)=>{const{Controller:a}=s(295),{Place:r}=s(883);e.exports=new class extends a{constructor(){super(r)}}},20:(e,t,s)=>{const{Controller:a}=s(295),{Task:r}=s(883);e.exports=new class extends a{constructor(){super(r)}}},38:(e,t,s)=>{const{Controller:a}=s(295),{Type:r}=s(883);e.exports=new class extends a{constructor(){super(r)}}},844:(e,t,s)=>{const{Controller:a}=s(295),{User:r}=s(883);e.exports=new class extends a{constructor(){super(r)}}},66:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},code:{key:"code",type:r.STRING(20),unique:!0},name:{key:"name",type:r.STRING(255)},description:{key:"description",type:r.STRING(255),allowNull:!0},Typeid:{key:"Typeid",type:r.INTEGER(10),references:{key:"id",model:"Type"}},photoUrl:{key:"photoUrl",type:r.STRING(255),allowNull:!0}},{sequelize:o,tableName:"Place",deletedAt:!0,timestamps:!0}),e.exports=n},123:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({placeParent_id:{key:"placeParent_id",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}},placeChild_id:{key:"placeChild_id",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}}},{sequelize:o,tableName:"Place_Place",deletedAt:!1,timestamps:!1}),e.exports=n},977:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:r.STRING(50)},description:{key:"description",type:r.STRING(255),allowNull:!0},deadLine:{key:"deadLine",type:r.DATE},status:{key:"status",type:r.BOOLEAN},Placeid:{key:"Placeid",type:r.INTEGER(10),allowNull:!0,references:{key:"id",model:"Place"}}},{sequelize:o,tableName:"Task",deletedAt:!0,timestamps:!0}),e.exports=n},756:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},name:{key:"name",type:r.STRING(50),unique:!0}},{sequelize:o,tableName:"Type",deletedAt:!0,timestamps:!0}),e.exports=n},348:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({id:{key:"id",type:r.INTEGER(10),primaryKey:!0,autoIncrement:!0,autoIncrementIdentity:!0},uid:{key:"uid",type:r.STRING(50),unique:!0},name:{key:"name",type:r.STRING(50)},email:{key:"email",type:r.STRING(50),unique:!0},verifiedEmail:{key:"verifiedEmail",type:r.STRING(50),unique:!0},photoUrl:{key:"photoUrl",type:r.STRING(255),allowNull:!0},password:{key:"password",type:r.STRING(255)},phoneNumber:{key:"phoneNumber",type:r.STRING(20),allowNull:!0}},{sequelize:o,tableName:"User",deletedAt:!0,timestamps:!0}),e.exports=n},458:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({Userid:{key:"Userid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"User"}},Placeid:{key:"Placeid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Place"}},startTime:{key:"startTime",type:r.INTEGER(5)},endTime:{key:"endTime",type:r.INTEGER(5)},startDate:{key:"startDate",type:r.DATE},endDate:{key:"endDate",type:r.DATE}},{sequelize:o,tableName:"User_Place",deletedAt:!1,timestamps:!1}),e.exports=n},78:(e,t,s)=>{const{Model:a,DataTypes:r}=s(121),o=s(934);class n extends a{}n.init({Userid:{key:"Userid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"User"}},Taskid:{key:"Taskid",type:r.INTEGER(10),primaryKey:!0,references:{key:"id",model:"Task"}},startDate:{key:"startDate",type:r.DATE},endDate:{key:"endDate",type:r.DATE}},{sequelize:o,tableName:"User_Task",deletedAt:!1,timestamps:!1}),e.exports=n},295:(e,t,s)=>{const{Model:a}=s(121),{Request:r,Response:o}=s(127),n=s(934),i={status:500,message:"⚠️ Oops!, Something goes Wrong !!⚠️"};e.exports={Controller:class{constructor(e){this.model=e,this.defaultErrorMessage=i}all=async(e,t)=>this.model.findAll().then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),t.status(500).json(i))));find=async(e,t)=>this.model.findOne({where:{id:e.params.id}}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),t.status(500).json(i))));save=async(e,t)=>{let s=await n.transaction({autocommit:!0});return this.model.upsert(e.body,{transaction:s}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),await s.rollback(),t.status(500).json(i))))};destroy=async(e,t)=>{let s=await n.transaction({autocommit:!0});return this.model.destroy({transaction:s,where:{id:e.params.id}}).then((e=>t.status(200).json(e))).catch((async e=>(console.error(e),await s.rollback(),t.status(500).json(i))))}},defaultErrorMessage:i}},883:(e,t,s)=>{const a=s(348),r=s(977),o=s(756),n=s(66),i=s(78),l=s(458),d=s(123);n.belongsToMany(n,{through:d,foreignKey:"placeChild_id",as:"subPlaces"}),n.belongsToMany(n,{through:d,foreignKey:"placeParent_id",as:"supPlaces"}),n.belongsTo(o,{foreignKey:"Typeid",as:"type"}),o.hasMany(n,{foreignKey:"Typeid",as:"places"}),n.hasMany(r,{foreignKey:"Placeid",as:"place"}),r.belongsTo(n,{foreignKey:"Placeid",as:"tasks"}),n.belongsToMany(a,{through:l,foreignKey:"Userid",as:"users"}),a.belongsToMany(n,{through:l,foreignKey:"Placeid",as:"places"}),a.belongsToMany(r,{through:i,foreignKey:"Taskid",as:"tasks"}),r.belongsToMany(a,{through:i,foreignKey:"Userid",as:"users"}),e.exports={User:a,Task:r,Type:o,Place:n,User_Task:i,User_Place:l,Place_Place:d}},824:e=>{const t={read:(e,t,s)=>e.get(`/${t}`,s.all),show:(e,t,s)=>e.get(`/${t}/:id`,s.find),create:(e,t,s)=>e.post(`/${t}`,s.save),update:(e,t,s)=>e.post(`/${t}/:id`,s.save),delete:(e,t,s)=>e.delete(`/${t}/:id`,s.destroy)};e.exports={addOperationRoutes:(e,s,{route:a,operations:r})=>{r.forEach((r=>{t[r](e,a,s)}))}}},934:(e,t,s)=>{const{Sequelize:a}=s(121);s(334).config(),e.exports=new a(process.env.DATABASE_URL,{define:{paranoid:!0,defaultScope:{attributes:{exclude:["createdAt","updatedAt","deletedAt"]}}}})},479:e=>{"use strict";e.exports=require("cors")},334:e=>{"use strict";e.exports=require("dotenv")},127:e=>{"use strict";e.exports=require("express")},121:e=>{"use strict";e.exports=require("sequelize")},219:e=>{"use strict";e.exports=JSON.parse('{"route":"places","operations":["read","show","create","update","delete"]}')},905:e=>{"use strict";e.exports=JSON.parse('{"route":"tasks","operations":["read","show","create","update","delete"]}')},90:e=>{"use strict";e.exports=JSON.parse('{"route":"types","operations":["read","show","create","update","delete"]}')},524:e=>{"use strict";e.exports=JSON.parse('{"route":"users","operations":["read","show","create","update","delete"]}')}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,s),o.exports}(()=>{const e=s(672);s(334).config(),e.listen(process.env.PORT||8e3,(()=>{console.log(`Server running on [33mhttp://${process.env.HOST}:${process.env.PORT}[0m`),console.log(new Date)}))})()})();