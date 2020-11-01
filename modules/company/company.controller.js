const Company = require('./company.model');


module.exports = {
    async create(request,h){
        
           try{ 
            const company = new Company(request.payload);
            var result = await company.save();
            return h.response(result);
            } catch (error){
            return h.response(error).code(500);
            }
    },
    async find(request,h){
        try{
            var company = await Company.find().populate('candidates');
            return h.response(company);
        }catch (error){
            return h.response(error).code(500);
        }
    },
    async findOne(request,h){
        try{
            var company = await Company.findById(request.params.id).populate('candidates');
            return h.response(company);
        }catch (error){
            return h.response(error).code(500);
        }
    },
    async update(request,h){
        try{
            var company = await Company.findByIdAndUpdate(request.params.id,request.payload,{new:true});
            return h.response( `your database has been submitted Safely:  ${company}`);
        }catch (error){
            return h.response(error).code(500);
        }
    
    },
    async delete(request,h){
        try{
            var result = await Company.findByIdAndDelete(request.params.id);
            return h.response( {msg: `company deleted with id: ${request.params.id}`});
        }catch (error){
            return h.response(error).code(500);
        }
    }
};