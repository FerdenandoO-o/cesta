const Usu = require("../models/Usuario");

module.exports = {
    async store(req,res){
        const usu = await Usu.create(req.body);
        return res.json(usu);
    },
    async list(req, res){
        const usu = await Usu.find({});
        return res.json(usu);
    },
    async index(req, res){
        const usu = await  Usu.findOne ({_id : req.params.id});
        return res.json(usu);
    },
    async update(req, res){
        const usu = await Usu.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.json(usu);
    },
    async destroy(req, res){
         await Usu.deleteOne({_id: req.params.id});
         return res.json({message:"Excluido com Sucesso!!"});
    }
};