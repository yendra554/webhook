data = file_get_contents("php://input");
event = json_decode(data, true);
if (typeof event !== 'undefined') {
    file = 'https://wbhkapp.herokuapp.com/log.txt';
    data = json_encode(event)+"\n";
    pData = {'name':_REQUEST["remoteJid"],'imgmsg':"imgmsg",'msg':"testing",'key':"fb868c1cda731b25e15fc4fa28cb3385",'number':"917428322239"};
    opts1 = {'http':{'method':'POST','header':'Content-type: application/json','content':json_encode(pData)}};
    context1 = stream_context_create(opts1);
    result1 = null;
    result1 = file_get_contents('https://wtzapimarket.herokuapp.com/api/getAllList', false, context1);
    file_put_contents(file, data);
}
console.log("asdsegd");