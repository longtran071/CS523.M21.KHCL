let width;
let height;
let tree;

function setup() {
    width = windowWidth - 30;
    height = windowHeight - 50;
    createCanvas(width, height);
    frameRate(1);
    nums = [7,8,1,5,9,11];
    segTree = new SegmentTree(nums);
    segTree1 = segTree.buildSegmentTree();
    tree = new Tree();
    for (let i = 0; i < segTree1.length; i++)
    {
        a = Number(segTree1[i]);
        tree.insert(a,i);
        // tree.insert();
    }
    console.log(tree);
}

function draw() {
    background(255);
    tree.draw();
    noLoop();
}

function randomNumber(a,b) {
    return Math.floor(Math.random() * (b - a) + a);
}