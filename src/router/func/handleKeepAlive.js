
// 路由百扁平化处理，将使用AppMain的中间组件剔除掉
const handleKeepAlive = (to) =>{
    // console.log("进入handleKeepAlive中...")
    let matched = to.matched;
    // 如果to.matched的长度大于2，说明中间使用了多次AppMain，这个时候需要将其进行清理
    if(matched && matched.length > 2){
        for(let i = 0; i<matched.length; i++){
            const element = matched[i];
            // 判断是否是后台管理页面的首页，判断to.meta.breadCrumb是否存在
            if(to.meta.breadCrumb && element.name != 'admin'){
                to.meta.breadCrumb.push({
                    name: element.name,
                    title: element.meta.title,
                    type: element.meta.type
                });
            }
            
            if(!to.meta.breadCrumb){
                to.meta.breadCrumb = [];
            }

            // 如果当模块使用AppMain，则将其删除
            if(element.components.default.name ==="AppMain"){
                to.matched.splice(i, 1);
                // 递归处理这种情况
                handleKeepAlive(to);
            }
        }
    }else{
        // 如果当前路由已经扁平化完毕了，将目标路由加入到面包屑中
        const breadCrumb = to.meta.breadCrumb;
        // 如果当前面包屑不存在
        if(!breadCrumb) {
            to.meta.breadCrumb = [];
        }

        // 判断当前目标是否已经加入了面包屑中，如果没有，则将其加入
        const isInBreadCrumb = to.meta.breadCrumb.some(item => item.name === to.name);

        // 因为默认跳转到/admin/home页面，所以需要判断
        if(!isInBreadCrumb && to.name != "admin-home"){
            to.meta.breadCrumb.push({
                name: to.name,
                type: to.meta.type,
                title: to.meta.title
            })
        }
    }

}

export default handleKeepAlive