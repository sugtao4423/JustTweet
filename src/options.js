(function(){
    chrome.storage.sync.get({'prefix': ''}, function(items){
        var result = prompt('Set Prefix', items.prefix);
        if(result !== null){
            chrome.storage.sync.set({'prefix': result}, function(){
                alert(`Prefix Saved!\n'${result}'`);
                window.close();
            });
        }else{
            window.close();
        }
    });
})();
