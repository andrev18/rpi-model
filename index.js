var proc_info = require('node-proc');


var getPIModel = function(callback){
    proc_info.cpuinfo(function(err,info){
        if(info){
            var rev = info[info.length-1].Revision;
            var index = h_r_codes.indexOf(rev);
            if(index > -1){
                callback(true, h_models[rev],rev);
                return true;
            }else{
                callback(false);
                return false;
            }
        }else{
            callback(false);
            return false;
        }
    });
}


module.exports = getPIModel;



//hardware revision codes
var h_r_codes = [
    '0002',
    '0003',
    '0004',
    '0005',
    '0006',
    '0007',
    '0008',
    '0009',
    '000d',
    '000e',
    '000f',
    '0010',
    '0013',
    '0011',
    '0012',
    'a01041',
    'a21041',
    '900092',
    'a02082',
    'a22082'];
    
var h_models = {
    '0002' : "Pi Model B Revision 1.0",
    '0003' : "Pi Model B Revision 1.0 + ECN0001 (no fuses, D14 removed)",
    '0004' : "Pi Model B Revision 2.0 Mounting holes",
    '0005' : "Pi Model B Revision 2.0 Mounting holes",
    '0006' : "Pi Model B Revision 2.0 Mounting holes",
    '0007' : "Pi Model A Mounting holes",
    '0008' : "Pi Model A Mounting holes",
    '0009' : "Pi Model A Mounting holes",
    '000d' : "Pi Model B Revision 2.0 Mounting holes",
    '000e' : "Pi Model B Revision 2.0 Mounting holes",
    '000f' : "Pi Model B Revision 2.0 Mounting holes",
    '0010' : "Pi Model B+",
    '0013' : "Pi Model B+",
    '0011' : "Pi Compute Module",
    '0012' : "Pi Model A+",
    'a01041' : "Pi 2 Model B (Sony, UK)",
    'a21041' : "Pi 2 Model B (Embest, China)",
    '900092' : "PiZero",
    'a02082' : "Pi 3 Model B (Sony, UK)",
    'a22082' : "Pi 3 Model B (Embest, China)"
}