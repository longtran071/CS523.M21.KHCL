let width;
let height;
let tree;
let tree_query;
let nums;
let c=1;
let qs = 1; // Bắt đầu đoạn truy vấn 
let qe = 5;
let i=1;
let BT = [] // List lưu index của các node được truy cập đến trong lúc update
let val = 2;//giá trị update
let left;//vị trí cho khoảng update
let right;//vị trí cho khoảng update
let x=0;
let random=0;
let check=0;
let y=0;
function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }

let do_alert = setTimeout(draw,3000);

function clearAlert()
{
  clearTimeout(do_alert);
}
function checks(){
    if(random==check){
        setup2();
        if(nums.length>=1&&nums.length<=8)
        {
        tree.draw();
        tree.draw_number_node(nums);
        noLoop();
       // tree.draw_build_imd();
      
        tree.draw_build();
        random=Math.floor(Math.random() * 50) + 1;
        }
        else{
            alert('Giới hạn phạm vi nhỏ hơn 9');
        }
    }
    else{
        alert("Đợi chương trình chạy hoặc reset");
    }
}
function check2(){
    setup1();
    if(nums.length>=1&&nums.length<=8)
    {
    tree.draw();
    tree.draw_number_node(nums);
    noLoop();
   // tree.draw_build_imd();
  
    tree.draw_build();
    random=Math.floor(Math.random() * 50) + 1;
    }
    else{
        alert('Giới hạn phạm vi nhỏ hơn 9');
    }
}
function setup1() {
    width = windowWidth - 30;
    height = windowHeight - 50;
    createCanvas(width, height);
    frameRate(1);
  
    //nums = [7,8,1,5,9,11,20,25]

    //nums=randomdata();   
    nums=getCreateData();
    segTree = new SegmentTree(nums);
    if(x==1){
        segTree1 = segTree.build_minSegmentTree();
    }
    else if(x==2){ 
        segTree1 = segTree.build_maxSegmentTree();
    }
    else {
        segTree1 = segTree.build_sumSegmentTree();
    }
    //Nếu muốn tạo cây sum hoặc max thì đổi sang 
    tree = new Tree(nums.length);
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
        // tree.insert();
    }

}
function setup2()
{
    width = windowWidth - 30;
    height = windowHeight - 50;
    createCanvas(width, height);
    frameRate(1);
    nums=randomdata();   
    //nums=getCreateData();
    segTree = new SegmentTree(nums);
    // segTree1 = segTree.build_minSegmentTree();
    if(x==1){
        segTree1 = segTree.build_minSegmentTree();
    }
    else if(x==2){ 
        segTree1 = segTree.build_maxSegmentTree();
    }
    else {
        segTree1 = segTree.build_sumSegmentTree();
    }
    //Nếu muốn tạo cây sum hoặc max thì đổi sang 
    // segTree1 = segTree.build_maxSegmentTree();
    // segTree1 = segTree.build_sumSegmentTree();
    tree = new Tree(nums.length);
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
        // tree.insert();
    }
}
function setup3(){
    width = windowWidth - 30;
    height = windowHeight - 50;
    createCanvas(width, height);
    frameRate(1);   
    //nums=getCreateData();
    segTree = new SegmentTree(nums);
    // segTree1 = segTree.build_minSegmentTree();
    if(x==1){
        segTree1 = segTree.build_minSegmentTree();
    }
    else if(x==2){ 
        segTree1 = segTree.build_maxSegmentTree();
    }
    else {
        segTree1 = segTree.build_sumSegmentTree();
    }
    //Nếu muốn tạo cây sum hoặc max thì đổi sang 
    // segTree1 = segTree.build_maxSegmentTree();
    // segTree1 = segTree.build_sumSegmentTree();
    tree = new Tree(nums.length);
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
        // tree.insert();
    }
}
function draw() {
    // tree.getquery(segTree,qs,qe,segTree.length);
   
}
function draw_query(){

    // background('#EEEEEE');
    // tree.getquery(segTree,qs,qe,segTree.length);
    tree.draw();
    tree.draw_number_node(nums);
    noLoop();
   //tree.draw_build();
    tree.draw_build_imd();
    //qs=3, đại diện cho Left, qe=2 đại diện cho Right  //đoạn truy vấn sai không cho truy vấn   
    //if(qs<qe || qs<0 ||qe<0||qe>nums.length-1)
    //aleart()// gửi thông báo hoặc in dòng chữ ra man hinh //tự chọn
    var input_l = $('#v-rmq-l').val();
    var input_r = $('#v-rmq-r').val();
    if(input_l>input_r)
    {
        alert('Giá trị L or R không hợp lê.');
    }
    else{
        if(input_r>nums.length-1)
        {
            alert('Giá trị L or R không hợp lê.')
        }
        else{
            if(x==1){
                setTimeout(()=>{tree.draw_minquery(input_l,input_r);},tree.time_build);
            }
            else if(x==2){ 
                setTimeout(()=>{tree.draw_maxquery(input_l,input_r);},tree.time_build);
            }
            else {
                setTimeout(()=>{tree.draw_sumquery(input_l,input_r);},tree.time_build);
            }
        }
    }
    
}
function setup4() {
    width = windowWidth - 30;
    height = windowHeight - 30;
    createCanvas(width, height);
    frameRate(1);
   

    
    segTree = new SegmentTree(nums);
    if(x==1){
        segTree1 = segTree.build_minSegmentTree();
    }
    else if(x==2){ 
        segTree1 = segTree.build_maxSegmentTree();
    }
    else {
        segTree1 = segTree.build_sumSegmentTree();
    }
    //Nếu muốn tạo cây sum hoặc max thì đổi sang 
    // segTree1 = segTree.build_maxSegmentTree();
    // segTree1 = segTree.build_sumSegmentTree();
    tree = new Tree(nums.length);
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
        // tree.insert();
    }
    //update cây min
    var input_l_update = $('#v-update-l').val();
    var input_r_update = $('#v-update-r').val();
    
    if(input_l_update>input_r_update)
    {
        alert('Giá trị L or R không hợp lê.');
    }
    else{
        if(input_r_update>nums.length-1)
        {
            alert('Giá trị L or R không hợp lê.')
        }
        else{
    if(x==1){
        segTree2 = segTree.update_min(input_l_update,input_r_update,val,BT);
    }
    else if(x==2){ 
        segTree2 = segTree.update_max(input_l_update,input_r_update,val,BT);
    }
    else {
        segTree2 = segTree.update_sum(input_l_update,input_r_update,val,BT);
    }
    console.log(BT);
}
    }
}

function draw_update() {
    // tree.getquery(segTree,qs,qe,segTree.length);
    tree.draw();
    tree.draw_number_node(nums);
    noLoop();
   //tree.draw_build();
    tree.draw_build_imd();
    var input_l_update = $('#v-update-l').val();
    var input_r_update = $('#v-update-r').val();
    var value=$('#v-update-value').val();
    //tree.draw_build();
    //qs=3, đại diện cho Left, qe=2 đại diện cho Right  //đoạn truy vấn sai không cho truy vấn   
    //if(qs<qe || qs<0 ||qe<0||qe>nums.length-1)
    //aleart()// gửi thông báo hoặc in dòng chữ ra man hinh //tự chọn 
    // setTimeout(()=>{tree.draw_maxquery(1,6);},tree.time_build+3000);
    //setTimeout(()=>{tree.draw_sumquery(1,6);},tree.time_build+3000);
    //truy vấn của cây sum hoặc max 
    //setTimeout(()=>{tree.draw_maxquery(1,6);},tree.time_build+3000);
    //setTimeout(()=>{tree.draw_sumquery(1,6);},tree.time_build+3000);
    //update cây min
    // setTimeout(() => {
    //     tree.draw_minupdate(BT,2);
    // }, tree.time_build+3000);
// 
//     if(input_l_update>input_r_)
//     {
//         alert('Giá trị L or R không hợp lê.');
//     }
//     else{
//         if(input_r_update>nums.length-1)
//         {
//             alert('Giá trị L or R không hợp lê.')
//         }
//         else{
    if(x==1){
        setTimeout(()=>{tree.draw_minupdate(BT,value);},tree.time_build);
    }
    else if(x==2){ 
        tree.draw_maxupdate(BT,value);
    }
    else {
        tree.draw_sumupdate(BT,value);
    }
// }
    }
function randomNumber(a,b) {
    return Math.floor(Math.random() * (b - a) + a);
}