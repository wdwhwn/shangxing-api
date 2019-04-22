package com.platform.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.platform.entity.OcGoodsEntity;
import com.platform.entity.OcShopEntity;
import com.platform.entity.TokenEntity;
import com.platform.service.TokenService;
import com.platform.util.ApiBaseAction;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.entity.OcMemberFavoritesEntity;
import com.platform.service.OcMemberFavoritesService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 收藏表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 15:34:45*/


@RestController
@RequestMapping("/index.php/app/index")
public class OcMemberFavoritesController extends ApiBaseAction {
    @Autowired
    private OcMemberFavoritesService ocMemberFavoritesService;
    @Autowired
    private TokenService tokenService;
//收藏列表


    @RequestMapping("/memberFavoritesList")
//    @RequiresPermissions("ocmemberfavorites:list")
    public Object list( @RequestParam(value = "page", defaultValue = "1") Integer page,
                   @RequestParam(value = "size", defaultValue = "10") Integer size,String token) {
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        //查询列表数据
        Map params = new HashMap();
        params.put("page", page);
        params.put("limit", size);
        params.put("mid",tokenEntity.getUserId());
        params.put("sidx", "id");
        params.put("order", "asc");
        Query query = new Query(params);
        List<OcMemberFavoritesEntity> ocMemberFavoritesList = ocMemberFavoritesService.queryList(query);
        int total = ocMemberFavoritesService.queryTotal(query);
        PageUtils pageUtil = new PageUtils(ocMemberFavoritesList, total, query.getLimit(), query.getPage());
        return toResponsSuccess(pageUtil);
    }
// 加入收藏
   @RequestMapping("/memberFavoritesAdd")
    public R save(String token,String favMsg, OcGoodsEntity ocGoodsEntity, OcShopEntity ocShopEntity) {
        ocMemberFavoritesService.save(token,favMsg,ocGoodsEntity,ocShopEntity);
        return R.ok();
    }
//删除

    @RequestMapping("/memberFavoritesDelete")
    public R delete(Integer goodsId,Integer shopId) {
        ocMemberFavoritesService.deleteBatch(goodsId,shopId);
        return R.ok();
    }
//查看信息

    public Object info(@PathVariable("id") Integer id) {
        OcMemberFavoritesEntity ocMemberFavorites = ocMemberFavoritesService.queryObject(id);
        return R.ok().put("ocMemberFavorites", ocMemberFavorites);
    }
//    修改

    public R update(OcMemberFavoritesEntity ocMemberFavorites) {
        ocMemberFavoritesService.update(ocMemberFavorites);

        return R.ok();
    }
//    查看所有列表

    public Object queryAll(@RequestParam Map<String, Object> params) {

        List<OcMemberFavoritesEntity> list = ocMemberFavoritesService.queryList(params);

        return R.ok().put("list", list);
    }
}
