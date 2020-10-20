
$(function(){
    function Cart() {
        // localStorage key
        this.key = 'example-cart';
        // 購物車的品項清單資料
        this.data = [];
        // 初始化購物車
        this.initCart = function () {
            //if there something in localStorage
            const localDataString = localStorage.getItem(this.key);
            //1. "[{...}, {...}, {...}]"
            //2. null new visitor
            // if data exist
            if(localDataString)
            {
                //change the string data back into object to this.data
                this.data = JSON.parse(localDataString);
            }
            this.render();
    
        }
        // 傳入商品id與數量並新增商品至購物車
        this.addItem = function (pid, amount) {
            //console.log(pid, amount);
            // use pid to find the information of the items
            const product = products.find(function(p){
                //the one we r gettting is pid
                return p.id === pid;
            })
            //console.log("product information:", product);
            // use item information to create an shopping cart item
            const item = {
                title: product.title,
                price: product.price,
                pid: product.id,
                amount: amount,
                // gettting the time when you add the product
                createTime: new Date().getTime()
            };
            //console.log("new item:", item);
            // add the shopping cart item into shopping cart
            //array.push(newInfo);
            this.data.push(item);
            // rendering
            this.render(); 
        }
        // 至購物車刪除於購物車內指定索引商品
        this.deleteItem = function (i) {
            this.data.splice(i, 1);
            this.render();
        }
        // 清空購物車
        this.emptyCart = function () {
            //empty all the items in the cart
            this.data = [];
            //update cart
            this.render();
        }
        // 更新資料到localStorage
        this.updateDataToStorage = function () {
            const dataString = JSON.stringify(this.data);
            localStorage.setItem(this.key, dataString);
        }
        // 渲染購物車
        this.render = function () {
            // console.log("getting read for rendering");
            // console.log("shopping cart data", this.data);
            this.updateDataToStorage();
            // use cart table body for the id
            const $tbody = $("#cartTableBody");
            //clear out the data in $tbody cuz the loop
            $tbody.empty();
            //preset the total to 0
            let cartValue = 0;
            // take out the shopping cart item
            this.data.forEach(function(item, idx){
                const totalPrice = item.price * item.amount;
                cartValue = cartValue + totalPrice;
                //create a table row
                const tr = `<tr>
                    <td>
                    <button data-item-index = "${idx}" class = "remove-btn btn btn-danger btn-sm">&times;</button>
                    ${item.title}</td>
                    <td class= "text-right">${item.price}</td>
                    <td class= "text-right">${item.amount}</td>
                    <td class= "text-right">${item.price * item.amount}</td>
                </tr>`; 
                //put table row into $tbody
                $tbody.append(tr);
            });
            // add total price into shopping cart
            //document.getElementById("cartTableFoot").innerHTML = '...'
            $("#cartTableFoot").html(`<tr>
                <td>Total Price</td>
                <td colspan = "3" class = "text-right">${cartValue}</td>
            </tr>`);
        }
    }
    //create an object
    const cart = new Cart();
    //initialization
    cart.initCart();
    console.log("shopping cart item:", cart);
    $("#productRow form").submit(function(e){
        e.preventDefault();
        // you can use this to get the item that is being sent in submit();
        // console.log("sent request:", this);
        // get the id of the item that is about to add into the shopping cart
        const pid = $(this).attr("data-product-id");
        // console.log("pid:", pid);
        // get the amount of the item the customer inputed
        let amount = $(`#amountInput${pid}`).val();
        cart.addItem(pid, amount);
    });
    
    // link emptyCart
    $("#clearCartBtn").click(function(){
        //empty shopping cart
        //console.log("empty cart");
        cart.emptyCart();
    });
    //link remove btn
    $("#cartTableBody").delegate(".remove-btn" , "click", function(){
        //console.log("removing", this);
        let idx = $(this).attr("data-item-index");
        idx = parseInt(idx);
        //console.log("idx:", idx);
        cart.deleteItem(idx);
    });
});

