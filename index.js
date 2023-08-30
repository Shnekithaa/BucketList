
let $addBtn = document.getElementById("add-btn");
let $inputBox = document.getElementById("input-box");
let $bucketListDiv = document.getElementById("bucket-list");

let bucketList = []
let wish;

function addToBucketList(){
    wish = $inputBox.value;
    bucketList.push(wish);
    showList(bucketList);
}

function showList(arr){
    $bucketListDiv.innerHTML="";
    for(let index=0;index<arr.length;index++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = "https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png";
        div.setAttribute("class", "list-item");
        img.addEventListener("click", function(){
            removeElementFunction(index);
        })
        div.innerText = arr[index];
        div.appendChild(img);
        $bucketListDiv.append(div);
    }
}
function removeElementFunction(i){
    bucketList.splice(i,1);
    showList(bucketList);
}
function resetBucketList(){
    bucketList = []
    showList(bucketList)
}