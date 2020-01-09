interface bannerType{//轮播图
    id: 1
    ad_position_id: number
    media_type: number
    name: string
    link: string
    image_url: string
    content: string
    end_time: number
    enabled: number
}

interface channelType{
    id: number
    name:string
    url:string
    icon_url: string
    sort_order: number
}
interface newGoodsListType{
    id: number
    name: string
    list_pic_url: string
    retail_price: number
}
interface hotGoodsListType{
    id: number
    name: string
    list_pic_url: string
    retail_price: number
    goods_brief: string
}
interface brandListType{
    id: number
    name:string 
    list_pic_url:string
    simple_desc: string
    pic_url:string
    sort_order: number
    is_show: number
    floor_price: 39
    app_list_pic_url:string 
    is_new: number
    new_pic_url: string
    new_sort_order: number
}
interface topicListType{
    id:number
    title: string
    content: string
    avatar:string
    item_pic_url: string
    subtitle: string
    topic_category_id: number
    price_info: number
    read_count:string 
    scene_pic_url:string 
    topic_template_id:number 
    topic_tag_id: number
    sort_order: number
    is_show: number
}
interface categoryListType{
    id: number
    name: string,
    goodsList: newGoodsListType[]
}
export interface homeType{
    banner:bannerType[],
    channel: channelType[],
    newGoodsList:newGoodsListType[],
    hotGoodsList:hotGoodsListType[],
    brandList:brandListType[],
    topicList:topicListType[],
    categoryList:categoryListType[]
}