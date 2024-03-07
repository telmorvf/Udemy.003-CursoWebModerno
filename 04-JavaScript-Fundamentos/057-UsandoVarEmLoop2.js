const funcs = [];

for(var i = 0; i < 10; i++){
    funcs.push(
        function(){
            console.log(i);
        }
    );
};

funcs[0]()  // 10
funcs[1]()  // 10
funcs[2]()  // 10
funcs[9]()  // 10
