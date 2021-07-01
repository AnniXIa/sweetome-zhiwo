const state = {
    cityList: [
        {
            value: 1,
            label: "浙江",
            cover: require('@/assets/images/areaTitle/zhejiang.png'),
            list: [{
                value: 10,
                label: '千岛湖',
                cover: require('@/assets/images/cityImg/qiandaohu.png'),
                titleCover: require('@/assets/images/cityTitle/qiandaohu.png'),
                describe: '千岛百姿湖山傍依，<br>让人心旷神怡的度假胜地。',
                info: [{
                    type: 1,
                    text: '千岛湖风景区，又称新安江水库，位于浙江省杭州市淳安县境内，国家5A级旅游景区。1958年兴建新安江水库，江水的注入，使得大大小小的山头变成了星罗棋布的1078个岛屿，可谓是人与自然最完美的合作，也使之成为中国最美的地方之一。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/qiandaohu/1.png')
                }, {
                    type: 3,
                    text: '百度图片'
                }, {
                    type: 0,
                    text: '感受梦幻浪漫的异域风情——千岛湖啤酒小镇',
                }, {
                    type: 1,
                    text: '天迹热气球俱乐部附近有一个啤酒小镇， 小镇里面不仅有赛车主题公园，还包含露营，滑翔伞，山地越野车等多个娱乐项目，更有夕阳余晖下的最美灯塔。游玩加拍照可以度过很充实的一天。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/qiandaohu/5.png')
                }, {
                    type: 2,
                    text: require('@/assets/images/city/qiandaohu/6.png')
                }, {
                    type: 3,
                    text: '小红书用户@北方花衣'
                }],
                play: [{
                    describe: '人与自然的完美交融',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@弱弱酱'
                    }, {
                        type: 1,
                        text: '无论是乘船欣赏千岛之美，还是惬意潇洒的绕岛自驾，亦或是酣畅淋漓的环岛骑行，都可以感受到让人心旷神怡的自然生态环境。'
                    }]
                }, {
                    describe: '起飞！梦幻热气球！',
                    info: [{
                        type: 1,
                        text: '挑一个晴天带上恋人一起去坐热气球吧！啤酒小镇附近的天迹热气球俱乐部满足你的愿望！在干净的草地上缓慢升起来，一起欣赏彩虹之上的景色，伴随着落日的余晖互相长情告白。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/7.png')
                    }, {
                        type: 3,
                        text: '小红书用户@冯大莉莉'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/8.png')
                    }, {
                        type: 3,
                        text: '小红书用户@GoodJJJob'
                    }, {
                        type: 4,
                        text: '电话：18906525117'
                    }, {
                        type: 4,
                        text: '地址：浙江省杭州市淳安县千岛湖方向路天鹅山千岛湖乡村俱乐部内'
                    }]
                }],
                eat: [{
                    describe: '江南水乡的饮食浪漫',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@魏永勤wGw'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@岛予'
                    }, {
                        type: 1,
                        text: '此外，千岛湖日晒面、茶园豆腐干、天坪石笋干、淳安米羹、千岛湖苞芦粿等都是必须品尝的美味。'
                    }]
                }, {
                    describe: '湖风和啤酒更配哦',
                    info: [{
                        type: 1,
                        text: '啤酒小镇内有许多小清吧，时间充裕的话到晚上去坐一坐，很不错，但是最便宜正宗的鲜啤在啤酒坊，很多大木酒桶堆在那里，买之前可以每一种先尝一尝，有鲜啤、白啤、黑啤，这个时候最能即刻的品尝出三种啤酒的不同之处。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/9.png')
                    }, {
                        type: 3,
                        text: '小红书用户@小象暴富了嘛'
                    }, {
                        type: 1,
                        text: '啤酒小镇里的花园餐厅也是用餐的好去处，不仅有美味的农家菜，还有精彩的演出可以观看，爱热闹的朋友一定不要错过！'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/10.png')
                    }, {
                        type: 3,
                        text: '网络'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/11.png')
                    }, {
                        type: 3,
                        text: '小红书用户@C学姐'
                    }, {
                        type: 4,
                        text: '电话：17858933500'
                    }, {
                        type: 4,
                        text: '地址：睦州大道与芙蓉路交叉口南行240米'
                    }]
                }],
                live: [{
                    describe: '群山连绵林海叠翠，<br>山风徐来松涛呼啸',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_29.png'),
                    hotelId: '29',
                    info: [{
                        type: 0,
                        text: '斯维登·千岛湖翡翠岛精品度假村'
                    }, {
                        type: 1,
                        text: '推荐亮点：位于千岛湖景区5A级风景区翡翠岛，风景宜人；超大露台，大视角怀抱千岛湖美景；配备私人超大泳池；日本著名设计师隈妍吾设计，低调奢华，精致优雅；交通便利，周边配套齐全，园区周边湖景一望无际，别墅内厨房娱乐设施一应俱全，可聚餐轰趴玩到尽兴。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/12.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/13.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/14.png')
                    }, {
                        type: 1,
                        text: '远离喧嚣，独享静谧居处；超大露台，大视角怀抱千湖岛美景'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/15.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/16.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/17.png')
                    }, {
                        type: 1,
                        text: '空间宽阔可以容纳多人同时入住，配备厨房，可以自己DIY健康放心的家庭餐。'
                    },]
                }, {
                    describe: '斯维登·千岛湖随园',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_1.png'),
                    hotelId: '1',
                    info: [{
                        type: 1,
                        text: '推荐亮点：位于千岛湖乡村俱乐部，高速出口300米即达，交通方便；屋顶超大露台，私家超大泳池；270°超大视角落地窗，尽享湖山美景；管家特色早餐服务。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/18.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/19.png')
                    }, {
                        type: 1,
                        text: '这是一家致力于打造轻奢、私密、安静、自在的休闲生活度假体验的别墅酒店，独栋别墅面积300-1000平，每栋别墅有自己的独立庭院。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/20.png')
                    }, {
                        type: 1,
                        text: '室内设计风格多样，有复古低调的日式榻榻米风，简约时尚的欧美风，还有古典的中式风，处处体现对品质文化的执着追求。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/21.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qiandaohu/22.png')
                    }]
                }]
            }, {
                value: 11,
                label: '建德',
                cover: require('@/assets/images/cityImg/jiande.png'),
                titleCover: require('@/assets/images/cityTitle/jiande.png'),
                describe: '江南水乡的水墨画',
                info: [{
                    type: 1,
                    text: '建德古为百越地，境域水系属钱塘江流域，每年夏季来临时水库温度低，江面水温高，两股水流因温差弥漫出江雾，形成如梦似幻般的独特景象。山风，村庄，树林，时隐时现，宛如一幅大写意的山水画，朦朦胧胧，层层叠叠，宛若人间仙境。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/jiande/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@猪肝面'
                }],
                play: [{
                    describe: '大慈岩镇——造访江南第一悬空寺',
                    info: [{
                        type: 1,
                        text: '大慈岩位于建德、兰溪、龙游三市交接处，是浙江省“旅游强镇”，也被称作杭州市 “风情小镇”， 历史文化底蕴深厚、旅游资源丰富。这里更是坐落着江南第一悬空寺，独特的山水地貌，造就了独特的自然景观，悬崖高位洞穴建筑是大慈岩的一大特色。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@认识杭州'
                    }, {
                        type: 4,
                        text: '电话：0571-6454941'
                    }, {
                        type: 4,
                        text: '地址：浙江建德南面24公里处大慈岩景区内'
                    }]
                }],
                eat: [{
                    describe: '走进江南的烟火人间',
                    info: [{
                        type: 1,
                        text: '建德豆腐包，皮超薄，豆腐超水嫩，一口下去就爆汁，非常鲜美。比较有名的门店就叫做建德大包，喜爱寻觅美食的美食家千万不要错过！ '
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Monananna'
                    }, {
                        type: 1,
                        text: '九姓鱼头王、国太豆腐、长卿银针虾、红糖麻糍......当地美食种类多多。推荐当地老字号严州府，当地美食都能一网打尽!'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/4.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/5.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/6.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/7.png')
                    }, {
                        type: 3,
                        text: '网络'
                    }, {
                        type: 4,
                        text: '电话：13575634233'
                    }, {
                        type: 4,
                        text: '地址：杭州下城区武林街道凤起路391-1号'
                    }]
                }],
                live: [{
                    describe: '大慈岩景区内的江南别院',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_470.png'),
                    hotelId: '470',
                    info: [{
                        type: 0,
                        text: '欢墅·大慈岩景区度假别院'
                    }, {
                        type: 1,
                        text: '推荐亮点：位于大慈岩风景区内，依山而建，避暑胜地；超大落地窗，独享私家园林景观；内置豪华红木家具，私密性高，独立院落免费停车；私人管家定制特色土菜。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/8.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/9.png')
                    }, {
                        type: 3,
                        text: '网络'
                    }, {
                        type: 1,
                        text: '空气清新，景观独好；房间整洁明亮。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/10.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiande/11.png')
                    }]
                }]
            }, 
            // {
            //     value: 12,
            //     label: '淳安',
            //     cover: require('@/assets/images/cityImg/chunan.png'),
            //     titleCover: require('@/assets/images/cityTitle/chunan.png'),
            // }, 
            {
                value: 13,
                label: '安吉',
                cover: require('@/assets/images/cityImg/anji.png'),
                titleCover: require('@/assets/images/cityTitle/anji.png'),
                describe: '安且吉兮，水墨竹乡',
                info: [{
                    type: 1,
                    text: '安吉县是浙江北部一个极具发展特色的生态县，地处长三角经济圈的几何中心，有中国第一竹乡、中国白茶之乡、中国椅业之乡等美誉，是电影《卧虎藏龙》的取景地。建县于公元185年，取《诗经》“安且吉兮”之意得名。境内有凯蒂猫乐园、中南百草原、中国大竹海等景点。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/anji/1.png')
                },{
                    type: 3,
                    text: '百度图片'
                },{
                    type: 0,
                    text: '探秘“卧虎藏龙”之地——大竹海'
                },{
                    type: 1,
                    text: '安吉是竹的故乡，这里的中国大竹海，毛竹长满山坡，大竹海是以毛竹为主的林地，是浙江省最著名的大毛竹示范基地，世界亚非拉十七国毛竹科学培育基地，有“中国毛竹看浙江，浙江毛竹看安吉，安吉毛竹看港口”之誉，也是中国东南部最大的竹文化休闲旅游区。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/anji/9.png')
                },{
                    type: 3,
                    text: '小红书用户@DZeer'
                }],
                play: [{
                    describe: '脱离尘世的水墨诗画，<br>别具一格的梦幻乐园',
                    info: [{
                        type: 1,
                        text: '小杭坑、天荒坪、云上草原、大竹海......安吉可玩的地方有很多。江浙沪节假日总是人山人海，不如错开出行高峰，来周边的安吉转转，这里不仅有森林峡谷，竹林茂密的自然风光，也有云上草原的天空游乐场这样的梦幻乐园。群峰叠翠，公路盘亘山间，云海竹林，享受最惬意的旅行时光。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/2.png')
                    },{
                        type: 3,
                        text: '小红书用户@木野民宿'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@泡菜鱼呀'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@DZeer'
                    }]
                },{
                    describe: '刀光剑影，重温武侠梦',
                    info: [{
                        type: 1,
                        text: '这里是《卧虎藏龙》的取景地之一，电影中李慕白和玉娇龙竹林穿梭打斗的场面让人印象深刻。引起武侠迷畅想联翩的同时，大竹海作为一个天然氧吧，也适合携全家老少来此登山洗肺，获取内心的宁静。《卧虎藏龙》拍摄地有明显的石碑提示，如果是影迷的话可以拍照打卡留念。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/12.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/13.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/14.png')
                    },{
                        type: 3,
                        text: '小红书用户@明说明话'
                    },{
                        type: 4,
                        text: '电话：(0572)5210999'
                    },{
                        type: 4,
                        text: '地址：浙江省湖州市安吉县天荒坪镇五鹤村'
                    }]
                }],
                eat: [{
                    describe: '“舌尖上的安吉”',
                    info: [{
                        type: 1,
                        text: '了解一座城市的方式很多，而美食是最直观的体验。美食不仅能满足味觉的享受，更可以了解到原汁原味的当地生活，在安吉同样如此。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/5.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/6.png')
                    },{
                        type: 1,
                        text: '在安吉，推荐探寻当地土菜馆寻找最正宗的安吉味。土鸡煲、紫梅羊肉汤、茶汁红烧肉、栗子烧肉......特色繁多，让人垂涎欲滴。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@小胡萝卜'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/8.png')
                    },{
                        type: 3,
                        text: '网络'
                    }]
                },{
                    describe: '浅尝竹林农家生活情调',
                    info: [{
                        type: 1,
                        text: '安吉本地美食极显农家情调，食材无一例外地来源于当地随处可采的竹笋，农人院子里的土鸡，或是农家自磨豆腐......朴实无华接地气。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/15.png')
                    },{
                        type: 3,
                        text: '小红书用户@hddgogo'
                    },{
                        type: 1,
                        text: '大竹林附近的这家安吉大竹林酒家农家菜馆值得一试，里面的土鸡煲、老豆腐、黄焖笋都极具当地特色，朴实实在。赏完竹林后不妨来此吃顿午饭。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/16.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/17.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/18.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/19.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/20.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 4,
                        text: '电话：13587911798'
                    },{
                        type: 4,
                        text: '地址：浙江省湖州市安吉县港山线杜家自然村1号'
                    }]
                }],
                live: [{
                    describe: '门观竹海万亩绿，<br>窗含“天荒”江南雪',
                    info: [{
                        type: 0,
                        text: '欢墅·竹博园精品度假别墅'
                    },{
                        type: 1,
                        text: '推荐亮点：别墅区位于竹海核心景区，夏可漂流，冬可滑雪，20分钟就能到达安吉博物馆，5公里往返范围内聚集Hello Kitty乐园、灵峰寺等景点。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/21.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/22.png')
                    },{
                        type: 1,
                        text: '门观竹海万亩绿，窗含“天荒”江南雪，让你真正摆脱城市的喧嚣。 超大厨房，让你度过欢乐的料理时光；独立棋牌室，和小伙伴一起欢聚游戏人生。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/23.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anji/24.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 1,
                        text: '房屋很干净，拥有私人独立泳池、私人管家、台球室等，让你尊享奢华体验；优美的环境，再搭配上细致周到的服务，酒店的休闲区定能满足您的品质需求。'
                    }]
                }]
            }, {
                value: 14,
                label: '长兴',
                cover: require('@/assets/images/cityImg/changxing.png'),
                titleCover: require('@/assets/images/cityTitle/changxing.png'),
                describe: '苏浙皖之交界——<br>湖州长兴',
                info: [{
                    type: 1,
                    text: '这里是躲开人山人海，看山看水的好去处。不仅有古朴典雅长亭瓦房，还有多种多样的美食。乘船穿行于依山傍水的中式建筑之间，飘飘乎如遗世独立，羽化而登仙，仿佛是在与一位隐逸世外高人促膝长谈。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/changxing/1.png')
                },{
                    type: 3,
                    text: '小红书用户@爱旅行的大叔'
                }],
                play: [{
                    describe: '山清水秀处，万物皆有灵',
                    info: [{
                        type: 1,
                        text: '龙之梦动物世界，占地约1600亩，总投资6亿元，共引进400多种动物约30000头。其中一定有你不曾见过的奇妙生灵！'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/2.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@真巧同学'
                    },{
                        type: 1,
                        text: '仙山湖国家湿地公园，由仙山和仙湖组成，充满灵气的地方，十分惬意。可以坐船游览，里面还有保护动物。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/4.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/5.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 4,
                        text: '电话：0572-6050688、4006177878'
                    },{
                        type: 4,
                        text: '地址：湖州市长兴县洪桥镇碧岩村'
                    }]
                }],
                eat: [{
                    describe: '感受江浙人家的烟火人间',
                    info: [{
                        type: 1,
                        text: '桃乐乐在长兴！作为长兴地标性的奶茶，桃乐乐是到长兴必打卡的奶茶店。推荐主打招牌妃夕妍雪，颜值与味道同时在线，杯底有厚厚一层桃肉打底，粉粉嫩嫩的草莓，冰上挤满奶油，然后撒上草莓干，冰冰甜甜。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/6.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@林林林'
                    },{
                        type: 4,
                        text: '电话：15257219266'
                    },{
                        type: 4,
                        text: '地址：湖州市安吉县凤凰路浙江大学医学院附属第一医院(安吉分院)东侧约60米'
                    },{
                        type: 1,
                        text: '此外，长兴干挑面也是必打卡的当地美食。加上灵魂豇豆，素鸡和荷包蛋，那就是一碗人生大圆满。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/8.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/9.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/10.png')
                    },{
                        type: 3,
                        text: '携程攻略'
                    },{
                        type: 1,
                        text: '一家必去的餐厅是老李家土菜馆，人均90元的价位，做的菜很可口很诱人，挺像在家里做的菜一样，让人吃起来有亲切感，又安心。'
                    },{
                        type: 4,
                        text: '电话 : 13587919283'
                    },{
                        type: 4,
                        text: '地址 : 浙江省湖州市安吉县玉华路57号'
                    }]
                }],
                live: [{
                    describe: '远离城市喧嚣，抛开尘世纷扰，<br>还来一份宁静',
                    info: [{
                        type: 0,
                        text: '欢墅·度假别墅（长兴南山雅居）'
                    },{
                        type: 1,
                        text: '推荐亮点：可以带宠物入住！K歌、麻将、轰趴、做饭等娱乐配套齐全，环境好，空气质量佳，周边种有果树可采摘体验。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/12.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/13.png')
                    },{
                        type: 1,
                        text: '周边有大唐贡茶院、龙山绿道玻璃栈道，古寿圣寺等景点。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/14.png')
                    },{
                        type: 1,
                        text: '所有极具特色的客房都配备有空调，浴室内提供拖鞋、24小时热水和吹风机，让您感受到宾至如归的享受。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changxing/15.png')
                    }]
                }]
            }, {
                value: 15,
                label: '宁波',
                cover: require('@/assets/images/cityImg/ningbo.png'),
                titleCover: require('@/assets/images/cityTitle/ningbo.png'),
                describe: '海港水乡，丝路上的东方之星',
                info: [{
                    type: 1,
                    text: '“东方大港”宁波，是具有7000年历史的“河姆渡文化”的发祥地，宁波文人荟萃，地方特色学派汇聚，如四明学派、阳明学派等，人才辈出有王守仁、朱舜水、黄宗羲等一批文化名人。古老文明为宁波积累了深厚的历史底蕴,现代文明使宁波充溢着无限的活力和生机。宁波人正是在古代文明与现代文明的交融中, 不断铸就着新的辉煌。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/ningbo/1.png')
                },{
                    type: 3,
                    text: '小红书用户@花仔出来丸鸭'
                }],
                play: [{
                    describe: '历史遗迹与都市之美的“华美乐章”',
                    info: [{
                        type: 1,
                        text: '宁波是《徐霞客游记》的起始地，所以这里的风景人文也非常丰富，玩点众多，有：月湖、天一阁、老外滩，东钱湖、雪窦山、蒋氏故里等很多好玩的地方。宁波在不断的发展过程中，承古启新，在继承古人为我们留下的美的同时，不断为自身增添人文之美。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/2.png')
                    },{
                        type: 3,
                        text: '小红书用户@墅家'
                    }]
                },{
                    describe: '"西子风韵、太湖气魄"，<br>浙江第一大湖——东钱湖',
                    info: [{
                        type: 1,
                        text: '东钱湖风光旖旎，身临其境，令人心旷神怡，宠辱皆忘。这里地灵人杰，不仅有悠久的历史、绚丽的文化，同时也是个人文荟萃之地。雅戈尔动物园、小普陀、南宋石刻公园等区内景点，让人频频驻足。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/10.png')
                    },{
                        type: 3,
                        text: '小红书用户@请叫我闲大人'
                    }]
                },{
                    describe: '探索环湖宝藏景点，<br>人文与自然的“交响曲”',
                    info: [{
                        type: 1,
                        text: '东钱湖风光旖旎，身临其境，令人心旷神怡，宠辱皆忘。而这里地灵人杰，也有其悠久的历史、绚丽的文化，也是个人文荟萃之地。雅戈尔动物园、小普陀、南宋石刻公园等区内景点，让人频频驻足。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/11.png')
                    },{
                        type: 3,
                        text: '东钱湖旅游门户网'
                    },{
                        type: 1,
                        text: '“北有秦陵兵马俑，南有南宋石刻群”,在中国漫长的石刻史上，偏隅江南的宋王朝少有此项艺术的留存，而东钱湖的南宋石刻群恰恰因弥补了这一历史断层而显出几分遗世独立的珍贵，它的恢弘精美在中国实属唯一，人们称它为“江南兵马俑”。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/12.png')
                    },{
                        type: 3,
                        text: '东钱湖旅游门户网'
                    },{
                        type: 1,
                        text: '湖心堤如卧波长虹，将东钱湖分为两半，并串联起钱堤烟波、陶公钓矶、清风香桂、澄湖明月、二灵掠影、霞屿锁岚、补陀洞天、山僧呼舶等湖心八景。佛语呢喃中，感受其八百年古韵。'
                    },{
                        type: 4,
                        text: '电话：(0574)88373737'
                    },{
                        type: 4,
                        text: '地址：浙江省宁波市鄞州区东钱湖镇'
                    }]
                }],
                eat: [{
                    describe: '浙东特色“甬菜”吃出海的味道',
                    info: [{
                        type: 1,
                        text: '宁波菜主要是浙东沿海一带具有宁帮风味特色的菜肴。宁波是沿海城市,因此以海鲜作为烹饪主料成为宁波菜的特色。宁波菜以讲究“鲜咸合一"，注重原汁原味，讲究鲜嫩香糯软滑，被人们誉为宁波十大名菜的冰糖甲鱼、苔菜拖黄鱼、全虾仁等令人食之回味无穷。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@Y.P.E'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@milon香'
                    }]
                },{
                    describe: '美食天堂，鱼虾盛宴，<br>钱湖四宝等你品尝',
                    info: [{
                        type: 1,
                        text: '东钱湖面积广阔，碧波下孕育着无数鱼虾，在人们对美食享受的极致追求中，人们逐渐将鱼的吃法发挥到极致，演化出“钱湖四宝”'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/14.png')
                    },{
                        type: 3,
                        text: '东钱湖旅游门户网'
                    },{
                        type: 1,
                        text: '“钱湖之吻”。吃蛳螺时，最好用食指与拇指捏住，用嘴轻轻一吸，那美味的螺肉便入君口中。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/15.png')
                    },{
                        type: 3,
                        text: '东钱湖旅游门户网'
                    },{
                        type: 1,
                        text: '钱湖河虾，通体透明、活蹦乱跳的湖虾，肉质细腻嫩白， 鲜香可口有嚼劲，不但营养丰富而且口感甚佳，是 一道受人喜爱的湖鲜。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/16.png')
                    },{
                        type: 1,
                        text: '钱湖渔港，宁波柏悦酒店标志性餐厅,其设计灵感将江南水乡的精妙之处呈现的完美至极，重新诠释了 “海鲜市场”这一主题，餐厅以传统宁波口味为特色，提供来自浙江沿海地区的地道美食，食材全部选自东钱湖这片水域，地道美食应有尽有。'
                    },{
                        type: 4,
                        text: '电话：(0574)28886390'
                    },{
                        type: 4,
                        text: '地址：东钱湖大堰路188号柏悦酒店内'
                    }]
                }],
                live: [{
                    describe: '温馨城宿，极致享受',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_66.png'),
                    hotelId: '66',
                    info: [{
                        type: 0,
                        text: '【城宿·清风徐来】鄞州中心地段、 落地窗投影仪2人居|紧邻鄞州万达'
                    },{
                        type: 1,
                        text: '推荐亮点：鄞州中心地段交通便利，宽敞舒适，购物便捷，吃喝玩乐应有尽有，精选舒适床品，设施齐备，精心布置。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/5.png')
                    },{
                        type: 1,
                        text: '超大落地窗，采光良好，宽敞舒适。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/6.png')
                    },{
                        type: 1,
                        text: '中心路段，交通便利，超大商场，购物便利，都市夜景窗边一览。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/7.png')
                    },{
                        type: 1,
                        text: '精挑舒适床品，体验极好的舒适睡眠，每一点细节都是对您睡眠质量的周到考虑。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/8.png')
                    },{
                        type: 1,
                        text: '设施齐备，配备日常生活必需用品。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/ningbo/9.png')
                    },{
                        type: 1,
                        text: '室内精心布置，家的美感完美体现。'
                    }]
                }]
            }, {
                value: 16,
                label: '温州',
                cover: require('@/assets/images/cityImg/wenzhou.png'),
                titleCover: require('@/assets/images/cityTitle/wenzhou.png'),
                describe: '“东瓯山水甲江南”——<br>温州美景千万别错过',
                info: [{
                    type: 1,
                    text: '温州市，简称“温”或“瓯”，是浙江省地级市，也是第一批改革开放的城市之一。温州钟灵毓秀，人杰地灵，历代名人辈出，旅游资源丰富，拥有雁荡山、楠溪江、百丈漈3个国家级风景名胜区和乌岩岭、南麂岛2个国家级自然保护区，还有6个省级风景区，8个市级风景区。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/wenzhou/13.png')
                },{
                    type: 3,
                    text: '网络'
                }],
                play: [{
                    describe: '人文与自然的共舞',
                    info: [{
                        type: 1,
                        text: '山水人文胜地——文成，温州西南上的宝藏旅游胜地，景点繁多，有刘伯温故里景区、铜铃山、百丈漈飞云湖景区等自然人文盛景。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/1.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/2.png')
                    },{
                        type: 3,
                        text: '小红书用户@朱桀的行走日记'
                    },{
                        type: 1,
                        text: '“三分天下诸葛亮，一统江山刘伯温；前朝军师诸葛亮，后朝军师刘伯温”'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@朱桀的行走日记'
                    },{
                        type: 1,
                        text: '飞云湖、天顶湖茫茫洋洋、若海天都、云门诸峰、直拨水面。百丈飞瀑，古人说：“雁荡龙湫眼底收，百丈飞瀑雄则秀，天赐神流三千尺，半空烟霞唾棉球”。瀑布群区峡谷两边，到处是奇岩怪石，险峰幽洞。'
                    },{
                        type: 4,
                        text: '电话：(0577)59003692'
                    },{
                        type: 4,
                        text: '地址：温州市文成县百丈漈篁庄村'
                    }]
                }],
                eat: [{
                    describe: '文成县美食小吃，<br>舌尖上的文成县',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/4.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 1,
                        text: '文成狗肉，以红酒串沙，配入当归、桔饼、黑木耳、香菇、大茴香等佐料烩熟、色味俱佳。具有“安五脏、补胃所、壮阳道、暖 、益气力、厚肠胃”等食疗价值'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@雄鹰王浚'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/6.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 1,
                        text: '伯温家宴是刘伯温后裔在此设的特殊家宴，一道道色香味俱全的菜肴纷纷被赋予美好的名字，来尝一尝“开国伟人”家中的味道。'
                    },{
                        type: 4,
                        text: '电话：(0577)67765599'
                    },{
                        type: 4,
                        text: '地址：浙江省温州市文成县诚意路202~216号'
                    }]
                }],
                live: [{
                    describe: '高端公寓，宝地居舍',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_182.png'),
                    hotelId: '182',
                    info: [{
                        type: 0,
                        text: '斯维登·嘉南美地度假公寓'
                    },{
                        type: 1,
                        text: '推荐亮点：交通便利，景点颇多，高山天然净氧，提供烧烤器材，配备私家花园，设备齐全，智能安保果岭高尔夫，儿童游乐区，高端周到，应有尽有。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/7.png')
                    },{
                        type: 1,
                        text: '环境优美，高山氧吧，瀑布之旁，轻奢享受，世外仙境。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/8.png')
                    },{
                        type: 1,
                        text: '私家花园，自由舒适，假期尽享。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/10.png')
                    },{
                        type: 1,
                        text: '套房、标间、大床房，多种房型任你选择。柔软，精挑床品，只为让你一夜安眠。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/11.png')
                    },{
                        type: 1,
                        text: '设施齐备，家中一样的便利。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wenzhou/12.png')
                    },{
                        type: 1,
                        text: '卫浴干净整洁，生活用品一应俱全，定期消毒，你的健康和舒适在这里都能得到守护。'
                    }]
                }]
            }, {
                value: 17,
                label: '嘉兴',
                cover: require('@/assets/images/cityImg/jiaxing.png'),
                titleCover: require('@/assets/images/cityTitle/jiaxing.png'),
                describe: '江南水乡，禾城风光',
                info: [{
                    type: 1,
                    text: '从湖州到嘉兴全程大概90公里左右，高铁出发只需半小时，高速自驾只需一个半小时。嘉兴是国家历史名城，素有“鱼米之乡、丝绸之府”的美誉，自然风光以潮、湖、海、河并存驰誉江南。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/jiaxing/1.png'),
                }, {
                    type: 3,
                    text: '小红书@SpongeMle是曹老师呀'
                }],
                play: [{
                    describe: '南湖风光，红色传承',
                    info: [{
                        type: 1,
                        text: '提到嘉兴，就不得不说一下南湖，中共一大会议地址、开天辟地新征程的诞生地就在这浙江省三大名湖之一的嘉兴了。“一大”纪念船、烟雨楼、伍相祠……'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/2.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/3.png'),
                    }, {
                        type: 3,
                        text: '小红书@SpongeMle是曹老师呀',
                    }, {
                        type: 4,
                        text: '电话：0573-82532848',
                    }, {
                        type: 4,
                        text: '地址：浙江省嘉兴市南湖区南溪西路1号',
                    }]
                }],
                eat: [{
                    describe: '江南特色美食老字号',
                    info: [{
                        type: 1,
                        text: '嘉兴粽子、嘉兴烧麦、酥羊大面、叉烧煲等等江南小吃目不暇接，保证让你大饱口福。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/4.png'),
                    }, {
                        type: 3,
                        text: '小红书@稻草人旅行',
                    }, {
                        type: 1,
                        text: '打卡地推荐越秀集市，让你感受最地道的人间烟火气，除了本地传统的特色小吃之外，更有从南到北各地小吃，包罗万象。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/5.png'),
                    }, {
                        type: 3,
                        text: '小红书@稻草人旅行',
                    }, {
                        type: 4,
                        text: '电话：13221397057',
                    }, {
                        type: 4,
                        text: '地址：浙江省嘉兴市南湖区越秀南路453号美食区A-81',
                    }]
                }],
                live: [{
                    describe: '精品公寓，物超所值',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_5.png'),
                    hotelId: '5',
                    info: [{
                        type: 0,
                        text: '斯维登-巴黎海琴公馆度假公寓'
                    }, {
                        type: 1,
                        text: '地处市中心核心商圈，紧邻海盐大剧院、世界主题公园，游览各地建筑；周边餐饮丰富，服务贴心周到。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/6.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/7.png'),
                    }, {
                        type: 1,
                        text: '房间宽敞、明亮舒适，更有无敌海景房适合情侣浪漫出行。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/8.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/jiaxing/9.png'),
                    }]
                }]
            }, {
                value: 18,
                label: '莫干山',
                cover: require('@/assets/images/cityImg/moganshan.png'),
                titleCover: require('@/assets/images/cityTitle/moganshan.png'),
                describe: '天然避暑胜地、<br>夏日“清凉世界”',
                info: [{
                    type: 1,
                    text: '莫干山，一个命名充满传奇色彩的南方避暑胜地，相传因吴王阖闾派干将、莫邪在此铸成举世无双的雌雄双剑而得名。地处浙江省湖州市德清县，山峦连绵起伏，空气清新，植被覆盖率有92%之高，其中主峰塔山海拔758米，以竹、泉、云和清、凉、绿、静著称，置身其中便有“清风迎面来，溽暑随步失”之感。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/moganshan/1.png'),
                }, {
                    type: 3,
                    text: '小红书@一罐热茶'
                }],
                play: [{
                    describe: '自然之美与民俗风情',
                    info: [{
                        type: 1,
                        text: '莫干山风景名胜区、庾村景区、仙潭村的萤火虫夜景、莫干山的小九寨沟“大斗坞”、下渚湖国家湿地公园等风景名胜能用自然之手抚平你内心的躁动。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/2.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/3.png'),
                    }, {
                        type: 3,
                        text: '小红书@莫干山蕨宿温泉美宿',
                    }]
                }, {
                    describe: '与夏日精灵的约会——<br>萤火虫基地',
                    info: [{
                        type: 1,
                        text: '到莫干山避暑游玩，除了景区美不胜收之外，在仙潭村碧坞龙潭的山谷里或风景区筏头乡的萤火虫基地里，你都能看到这些美丽的生灵舞动着夏日的旋律。心存敬畏，用心感受大自然的浪漫与美。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/6.png'),
                    }, {
                        type: 3,
                        text: '小红书@悠然九希',
                    }]
                }, {
                    describe: '萤火点点，点燃“仲夏夜之梦”',
                    info: [{
                        type: 1,
                        text: '夜幕降临，带上好伙伴或者你的那个他（她）踏入这幽静美丽的萤火之森，面前拂过清凉的晚风，是否能够唤醒你儿时追逐萤火虫的记忆。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/7.png'),
                    }, {
                        type: 3,
                        text: '小红书@蕨宿淡水姐',
                    }, {
                        type: 1,
                        text: '除了适合夜间观赏的萤火虫之森，更有适合白天游玩的仙潭田园风光，童话小镇里有各种稻草造型、小溪流、田间小路，还有网红小火车，如果你是亲子游，那更值得一试。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/8.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/9.png'),
                    }, {
                        type: 3,
                        text: '小红书@雨---不停',
                    }, {
                        type: 4,
                        text: '电话：13655822809',
                    }, {
                        type: 4,
                        text: '地址：浙江省湖州市德清县莫干山国际旅游度假区内',
                    }]
                }],
                eat: [{
                    describe: '眼花缭乱的农家小菜',
                    info: [{
                        type: 1,
                        text: '时令野菜、松茸草鸡汤、特色土鸡煲、三鲜豆腐、葱油鳊鱼、小米糕、卤鸭总有一款能撩拨起你的味蕾，感受一下与自然共进晚餐的感觉吧。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/4.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/5.png'),
                    }, {
                        type: 3,
                        text: '小红书用户@大陆武康人',
                    }]
                }, {
                    describe: '莫干山吃货攻略',
                    info: [{
                        type: 1,
                        text: '猪肚鸡、糖醋桂花肉鲜香美味，猪肝面、青椒笋干汤面劲道爽滑，家常小菜、农场餐厅纯天然无污染，让你品尝到最地道健康的江南美味。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/10.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/11.png'),
                    }, {
                        type: 3,
                        text: '小红书@阿狗今天吃了吗',
                    }, {
                        type: 1,
                        text: '首推几大宝藏网红餐厅：金鱼妈妈的店、杏仙面店、一凡餐厅、义远有机农场，味道一绝、环境优美、尤其适合打卡拍照。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/12.png'),
                    }, {
                        type: 3,
                        text: '小红书@阿狗今天吃了吗',
                    }, {
                        type: 4,
                        text: '电话：0572-8838506',
                    }, {
                        type: 4,
                        text: '地址：浙江省湖州市德清县莫干山风景区623号大坑景区下方青草荡内(大坑景区怪石角森林公园)（金鱼妈妈的店）',
                    }]
                }],
                live: [{
                    describe: '离尘不离景，<br>拥抱山水之美',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_2719.png'),
                    hotelId: '2719',
                    info: [{
                        type: 0,
                        text: '莫干山升华·溪隐民宿'
                    }, {
                        type: 1,
                        text: '离尘不离景，地理位置相当优越，地处有着“桃源村”之称的东沈村，依山傍河，景色秀丽。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/13.png'),
                    }, {
                        type: 3,
                        text: '小红书@路景旅行',
                    }, {
                        type: 1,
                        text: '坐拥180度宽阔水景，设计上融合“竹”的特色，让客人能享受到更天然的居住环境，更绿色健康的生活体验。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/14.png'),
                    }, {
                        type: 3,
                        text: '小红书@路景旅行',
                    }, {
                        type: 1,
                        text: '精品设计、早餐推送、超大浴缸、玻璃栈道等娱乐休闲也一应俱全，房间素雅温馨，唯美浪漫，让你在大自然的怀抱中安然入梦。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/moganshan/15.png'),
                    }, {
                        type: 3,
                        text: '小红书@路景旅行',
                    }]
                }]
            }]
        }, {
            value: 2,
            label: "巴蜀",
            cover: require('@/assets/images/areaTitle/bashu.png'),
            list: [{
                value: 20,
                label: '乐山',
                cover: require('@/assets/images/cityImg/leshan.png'),
                titleCover: require('@/assets/images/cityTitle/leshan.png'),
                describe: '智者乐水，仁者乐山',
                info: [{
                    type: 1,
                    text: '乐山，古称嘉州，是四川省辖下的一个地级市，历史上属古蜀国，有“海棠香国”的美誉。有峨眉山，乐山大佛等著名景点，还有钵钵鸡、翘脚牛肉等美食，且距离成都近，交通便利，因此吸引了众多旅客。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/leshan/1.png')
                }, {
                    type: 3,
                    text: '百度百科'
                }],
                play: [{
                    describe: '除了乐山大佛，<br>你对乐山一无所知',
                    info: [{
                        type: 1,
                        text: '乐山人杰地灵，名胜古迹更是数不胜数，大部分人说起乐山想到的都是乐山大佛，但其实峨眉山、嘉阳小火车和黑竹沟罗城古镇等都来自乐山，总之这座宝藏城市藏着太多你不知道的惊喜。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/leshan/2.png')
                    },]
                }],
                eat: [{
                    describe: '说不尽的美食',
                    info: [{
                        type: 1,
                        text: '在四川，可以说没有人不知道乐山的美食是吃货们的天堂。鲜香入味的翘脚牛肉，辣却让人欲罢不能的钵钵鸡，还有远近闻名的豆腐脑与独特的乐山话组成了这座城市独特的魅力。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/leshan/3.png')
                    }, {
                        type: 3,
                        text: '知乎用户@沈河鱼'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/leshan/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Starling洛菲'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/leshan/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@0705_蟹蟹'
                    },]
                }]
            }, {
                value: 21,
                label: '都江堰',
                cover: require('@/assets/images/cityImg/dujiangyan.png'),
                titleCover: require('@/assets/images/cityTitle/dujiangyan.png'),
                describe: '千年历史，蕴藏无限智慧',
                info: [{
                    type: 1,
                    text: '都江堰市隶属四川省成都市，位于成都平原西北部，以秦国蜀郡太守李冰修建的都江堰水利工程而得名，被誉为“天府之源”。都江堰是国际旅游名城，古老的都江堰水利工程被誉为“世界水利文化的鼻祖”；有“青城天下幽”之称的青城山，是中国道教发祥地。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/dujiangyan/1.png')
                }],
                play: [{
                    describe: '岷江遥从天际来，<br>神功凿破古离堆',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/dujiangyan/2.png')
                    }, {
                        type: 1,
                        text: '都江堰市风景秀美，植被覆盖率高，有都江堰水利工程、青城山、离堆公园等著名景点，既可以得到身体的锻炼也可以完成心灵的放松。'
                    }]
                }],
                eat: [{
                    describe: '被低估的美食聚集地',
                    info: [{
                        type: 1,
                        text: '麻辣兔头被称为都江堰的名片，油辣子伴着酥香的花生粒一起满满裹住兔头，一口下去鲜香充满了整个口腔。红糖醪糟加蛋还是记忆中的味道，软糯的叶儿粑一口一个，都是令人垂涎三尺的美食。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/dujiangyan/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@胖不怕'
                    }, {
                        type: 1,
                        text: '门店推荐店铺老号尤兔头、太平张醪糟，店铺不大但是本地人也要排长队才能吃到。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/dujiangyan/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@黄小邪'
                    },]
                }]
            }, {
                value: 22,
                label: '阆中',
                cover: require('@/assets/images/cityImg/langzhong.png'),
                titleCover: require('@/assets/images/cityTitle/langzhong.png'),
                describe: '传说中的阆苑仙境——<br>阆中古城',
                info: [{
                    type: 1,
                    text: '四川阆中，这座有着 2300 多年历史的千年古城，比起赫赫有名的丽江、平遥和歙县，多少有些羞涩，但它是和这三座城市一起被批准为历史文化名城的，为名城中的四小花旦之一。它就像有些花含苞时间会长一些，可一旦绽放便能惊艳众人。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/langzhong/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@珈一值不值'
                }],
                play: [{
                    describe: '在古城中返璞归真',
                    info: [{
                        type: 1,
                        text: '穿过漫长的岁月，去贡院看看古代考生们头疼的试卷，去风水博物馆了解阆中太极风水布局，再去华光楼拍几张照片，青树石瓦，静院闹市，别有一番风味'
                    },{
                        type: 4,
                        text: '电话：4001009255'
                    },{
                        type: 4,
                        text: '地址：阆中市阆水中路33号'
                    }]
                }],
                eat: [{
                    describe: '用最实惠的价格，<br>吃最地道的美味',
                    info: [{
                        type: 1,
                        text: '去古城一定要吃小吃，锅盔、凉粉、张飞牛肉煎饼物美价廉，是古城独特的风味。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/langzhong/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@水母啊水母'
                    }, {
                        type: 1,
                        text: '推荐李家厨房、方酥锅盔，好吃美味，一站品尝，最重要价格实惠！'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/langzhong/3.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/langzhong/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@水母啊水母'
                    },{
                        type: 4,
                        text: '电话：0817-6237373'
                    },{
                        type: 4,
                        text: '地址：四川省南充市阆中市武庙街124号'
                    }]
                }],
                live: [{
                    describe: '超值便利享受与最划算价格',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_13743.png'),
                    hotelId: '13743',
                    info: [{
                        type: 0,
                        text: '阆中斯维登度假公寓（宏凌山水城店）'
                    }, {
                        type: 1,
                        text: '推荐亮点：交通便利，干净整洁，价格公道，是学生党旅游的不二之选。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/langzhong/5.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/langzhong/6.png')
                    }, {
                        type: 1,
                        text: '门店地理位置优越，位于阆中古城嘉陵江畔与宏凌山水城商业区周边，且配套设施齐全。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/langzhong/7.png')
                    }]
                }]
            }, {
                value: 23,
                label: '崇州',
                cover: require('@/assets/images/cityImg/chongzhou.png'),
                titleCover: require('@/assets/images/cityTitle/chongzhou.png'),
                describe: '园林景观，绿色天地——崇州',
                info: [{
                    type: 1,
                    text: '崇州市古称蜀州，四川省成都市代管县级市，地处成都平原西部，位于岷江中上游，呈西北高东南低之势，是山地，丘陵，平原兼有的地貌类型，境内主要有六顶山、令牌山、鸡冠山、凤栖山等与青城山相连。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/chongzhou/1.png')
                }],
                play: [{
                    describe: '漂浮绿岛水上森林',
                    info: [{
                        type: 1,
                        text: '位于崇州的桤木河湿地公园，满屏的绿色让人心旷神怡，一大片笔直的水杉屹立水中，仿佛一座漂浮绿岛，如梦如幻的光影透过枝叶洒在飘满绿萍的水面上，不由得联想到绿野仙踪。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/2.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@遛狗局'
                    }, {
                        type: 4,
                        text: '地址：四川省成都市崇州隆兴镇桤木河湿地公园(以西成温邛高速南侧)'
                    }]
                }],
                eat: [{
                    describe: '藏在巷子里的美食',
                    info: [{
                        type: 1,
                        text: '崇州的美食给人以纯朴自然的感觉，没有华丽的店面、周全的服务，只有古法的制作工艺，最新鲜的食材。当地人热情好客，对每一碗食物都付出全心全意。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@吃喝玩乐小胖纸'
                    }, {
                        type: 1,
                        text: '古法制作工艺，炭火烤制，全靠经验来把握蛋糕的火候。充满温度的蛋糕，朴实的制作工艺。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@吃喝玩乐小胖纸'
                    }, {
                        type: 1,
                        text: '推荐门店张记副食店、周荞面，实惠的价格，健康的食材，好吃还不胖，这样一碗荞麦面谁能拒绝？尽管他家的装修非常的不起眼，但好酒不怕巷子深，每天来吃的人依旧络绎不绝，麻是他家的一大特点。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@吃喝玩乐小胖纸'
                    }, {
                        type: 4,
                        text: '电话：13882056028'
                    }, {
                        type: 4,
                        text: '地址：崇州市学府街136号'
                    }]
                }],
                live: [{
                    describe: '古色古香度假别院',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_429.png'),
                    hotelId: '429',
                    info: [{
                        type: 0,
                        text: '欢墅.街子古镇慕竹轩度假别院'
                    }, {
                        type: 1,
                        text: '推荐亮点：出门即是百年街子古镇，N种川蜀特色美食，竹艺风格别院，夏日避暑首选。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/7.png')
                    }, {
                        type: 1,
                        text: '内设格局、风格皆不相同，一座复古的别院，一间有清代古婚床的房子，步行100米，欣赏位于中心广场内的4棵千年银杏树。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/8.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongzhou/9.png')
                    },]
                }]
            }, {
                value: 24,
                label: '重庆',
                cover: require('@/assets/images/cityImg/chongqing.png'),
                titleCover: require('@/assets/images/cityTitle/chongqing.png'),
                describe: '山城烟火，雾都风情',
                info: [{
                    type: 1,
                    text: '重庆，简称巴和渝，别称山城、渝都、桥都、雾都等，是中华人民共和国直辖市，中西部水陆空型综合交通枢纽。重庆地处中国西南部，长江中上游地区山地面积大，造就了重庆独特的自然景观与人文风格。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/chongqing/1.png')
                },{
                    type: 3,
                    text: '知乎用户@Ms.Bu'
                }],
                play: [{
                    describe: '又见重庆，人间灯火阑珊处',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/2.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 1,
                        text: '错落、弯曲的街道，灯火阑珊处路灯、车灯、山景、江景，除了印象中的热辣，也是一座盛开在人间灯火阑珊处的山城。洪崖洞、解放碑步行街、鹅岭二厂天台、十八梯、都是独特的重庆风情，是让人忘不掉的美好。'
                    }]
                },{
                    describe: '漫画中走出的街道',
                    info: [{
                        type: 1,
                        text: '洪崖洞目前有11层，每一层都是不同的风光，名副其实的出片圣地。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/4.png')
                    },{
                        type: 3,
                        text: '知乎用户@重庆游品'
                    },{
                        type: 1,
                        text: '第11层平台上可以俯瞰江景，还有一些根据老重庆人的生活打造的铜像雕塑，数量和规模都不小，具有非常独特的艺术性和观赏性。第9-10层是异国风情美食街，各种特色小吃和酒馆都能看到，同样也是很好的社交平台。第6层是巴渝十二景，有各种重庆的自然景观和人文圣地。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/5.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/6.png')
                    },{
                        type: 3,
                        text: '知乎用户@重庆游品'
                    },{
                        type: 1,
                        text: '第五层动感酒吧街、重逢1980街区是年轻人们的聚集地，夜晚在这里享受休闲时光。第四层盛宴美食街为游客们提供了最正宗的重庆小吃，在游玩的同时满足你挑剔的胃。第一到三层都是巴渝风情街，延续了青砖石瓦的巴渝传统建筑，展示了具有老重庆传统的生活细节，适合购买纪念品。'
                    },{
                        type: 4,
                        text: '电话：023-63039995'
                    },{
                        type: 4,
                        text: '地址：重庆市渝中区嘉陵江滨江路88号'
                    }]
                }],
                eat: [{
                    describe: '火辣重庆滋味',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@果小姐啊'
                    },{
                        type: 1,
                        text: '在重庆没有啥子问题是一顿火锅解决不了的，如果有，那就两顿。重庆火锅远近闻名，但其实重庆的美食不仅仅是火锅，筋道爽口的重庆小面，鲜香的酸辣粉还有烤脑花抄手等美食都是让人走不动的重庆味道。'
                    }]
                },{
                    describe: '酣畅淋漓的辣味享受',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/7.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@木木松松果果'
                    },{
                        type: 1,
                        text: '除了火锅，重庆还有很多具有当地特色的美食，毛血旺、双椒鱼、粉蒸肉等都是不可错过的滋味，在洪崖洞边欣赏夜景边回味美食，造就了一个个美丽的夜晚。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/9.png')
                    },{
                        type: 1,
                        text: '推荐店铺：零贰山火焰江湖菜，重庆老本地人经常光顾餐厅。人气太旺，每次去都排队，要吃早点去，避开饭点高峰期。'
                    },{
                        type: 4,
                        text: '电话：023-63638158'
                    },{
                        type: 4,
                        text: '地址：重庆市渝中区沧白路13号'
                    }]
                }],
                live: [{
                    describe: '身处繁华地段，<br>感受不夜城的热闹非凡',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_152.png'),
                    hotelId: '152',
                    info: [{
                        type: 0,
                        text: '斯维登.解放碑协信公馆'
                    },{
                        type: 1,
                        text: '推荐亮点：美式轻奢装修，超大居住空间，步行10分钟，打卡宫崎骏笔下千与千寻的场景——洪崖洞；驾车20分钟打卡网红轻轨站，地道的火锅、小面、江湖菜齐聚楼下，是饕餮的狂欢；盘山而上1.5公里，到达解放碑。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chongqing/12.png')
                    },{
                        type: 1,
                        text: '干净舒适的住宿环境，给你的旅途最温馨的保障。'
                    }]
                }]
            }, {
                value: 25,
                label: '成都',
                cover: require('@/assets/images/cityImg/chengdu.png'),
                titleCover: require('@/assets/images/cityTitle/chengdu.png'),
                describe: '一个让你来了就不想走的城市',
                info: [{
                    type: 1,
                    text: '成都简称“蓉”，别称蓉城、锦城，是四川省省会，成都位于四川盆地西部，成都平原腹地，境内地势平坦，河网纵横，自古有“天府之国”的美称。有着金沙遗址、武侯祠、宽窄巷子等名胜古迹。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/chengdu/1.png')
                },{
                    type: 3,
                    text: '百度百科'
                },{
                    type: 0,
                    text: '网红地标，奢侈品天堂——成都IFS'
                },{
                    type: 1,
                    text: '成都国际金融中心，简称成都IFS，位于成都市锦江区，是集购物、文化娱乐、写字楼、酒店式公寓、酒店于一体的城市综合体。近几年随着自媒体的发展，IFS知名度逐渐增强，成为了成都人尽皆知的网红地标。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/chengdu/14.png')
                },{
                    type: 3,
                    text: '小红书用户@阿蘅'
                },{
                    type: 2,
                    text: require('@/assets/images/city/chengdu/15.png')
                },{
                    type: 3,
                    text: '小红书用户@小爱君闲情日志'
                },{
                    type: 1,
                    text: 'IFS无论何时永远都是人来人往，这里是购物爱好者的天堂，来自世界各地的奢侈品品牌让人应接不暇，琳琅满目的奢侈品仿佛置身电影当中。IFS经典的熊猫屁股也是经典拍照打卡地，将四川特色与现代潮流结合起来。'
                }],
                play: [{
                    describe: '潮流与传统并存的城市',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/2.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@琼袅的旅行本本'
                    },{
                        type: 1,
                        text: '成都这座包容性极强的城市不仅有着众多文化古迹，也是年轻人的好去处，无论是339还是九眼桥、兰桂坊，各种各样的酒吧、清吧造就了成都丰富的夜生活。白天可以去人民公园喝茶聊天，夜晚去兰桂坊喝酒社交，构成了成都独特的文化。'
                    }]
                },{
                    describe: '时尚潮流圣地，<br>GET明星同款',
                    info: [{
                        type: 1,
                        text: 'IFS是成都最繁荣的商业购物中心，这里高楼林立，时尚商铺遍地开花，有许多明星开的店铺，装修风格独特，适合购物打卡。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/5.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@小爱君闲情日志'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@二混帮三帮主'
                    },{
                        type: 1,
                        text: '无论是白天还是晚上，都是不一样的风景，都值得一看。'
                    },{
                        type: 4,
                        text: '电话 : 028-69396939'
                    },{
                        type: 4,
                        text: '地址 : 成都市锦江区红星路三段1号'
                    }]
                }],
                eat: [{
                    describe: '无法拒绝的成都风味',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@二七'
                    },{
                        type: 1,
                        text: '由于盆地地形和湿热的气候，成都美食以辣闻名，成都最资格的美食往往都藏在居民楼或小巷子里，大到火锅、川菜、冒菜，小到糖油果子、红糖糍粑、小酥肉等都是一代人的记忆，也是游客们无法抗拒的美味。'
                    }]
                },{
                    describe: '火锅与小吃的碰撞',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@毛驴小姐姐'
                    },{
                        type: 1,
                        text: '在火力的作用下，火锅中的汤卤处于滚沸状态，食者边烫边食，热与味结合，“一热当之鲜”，再加上选用上乘的调料，新鲜的菜品、味碟，真是鲜上加鲜，回味无穷。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@小白队长'
                    },{
                        type: 1,
                        text: '街边的小吃也同样不可错过，龙抄手、肥肠粉、锅盔、冰粉、钵钵鸡便宜实惠，令人回味无穷。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/10.png')
                    },{
                        type: 3,
                        text: '小红书用户@陈真香儿'
                    },{
                        type: 1,
                        text: '推荐店铺：蜀大侠，随便一家都好吃！蜀大侠的火锅功夫可谓出神入化，凭借着一锅火锅便能无敌于市场，达到无招胜有招的境界。'
                    },{
                        type: 4,
                        text: '电话：(028)86666757'
                    },{
                        type: 4,
                        text: '地址：成都市锦江区商业场街1号2层'
                    }]
                }],
                live: [{
                    describe: '高档住宿环境，<br>轻奢主题公寓',
                    qrCodeImg: '',
                    hotelId: '',
                    info: [{
                        type: 0,
                        text: '城宿.天空之城'
                    },{
                        type: 1,
                        text: '推荐亮点：紧邻天府广场，交通便利，提供中餐，住宿环境优美，装修豪华，基础设施完善，房型丰富，满足个性化需求。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/12.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengdu/13.png')
                    }]
                }]
            }, {
                value: 26,
                label: '青城山',
                cover: require('@/assets/images/cityImg/qingchengshan.png'),
                titleCover: require('@/assets/images/cityTitle/qingchengshan.png'),
                describe: '拜水都江堰<br> 青城天下幽',
                info: [{
                    type: 1,
                    text: '作为国家5A级景区，青城山靠岷山雪岭，面向川西平原，群峰环绕，状若城廓；林深树密，四季常绿；丹梯千级，曲径通幽。全山以幽洁取胜，与剑门之险，峨眉之秀，夔门之雄齐名，享有“青城天下幽”的美名。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/qingchengshan/1.png')
                }],
                play: [{
                    describe: '问道青城山，<br>漫步云游处',
                    info: [{
                        type: 1,
                        text: '青城山因其四季常青，满目青翠，诸峰环峙，状若城廓而得名，素有"青城天下幽"之美誉，与剑门之险、峨嵋之秀、夔门之雄齐名。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/2.png')
                    }, {
                        type: 1,
                        text: '青城山分青城前山和青城后山。前山景色优美，文物古迹众多；后山自然景物神秘绮丽、原始华美如世外桃源。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/3.png')
                    }, {
                        type: 3,
                        text: '网络'
                    }, {
                        type: 4,
                        text: '电话 : 028-87111907'
                    }, {
                        type: 4,
                        text: '地址 : 四川省成都市都江堰市青城山镇青城山路'
                    }]
                }],
                eat: [{
                    describe: '青城山下美食圈',
                    info: [{
                        type: 1,
                        text: '软糯的醪糟粉子、甜度恰到好处的红糖调配，轻轻拿起一块还会拉丝，一口下去满满的幸福感。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/4.png')
                    }, {
                        type: 1,
                        text: '香气四溢的藿香豆瓣鱼，鲜香的肉质很入味，还有特色的青城腊肠，一口下去满嘴流油。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/5.png')
                    }, {
                        type: 1,
                        text: '推荐店铺张醪糟、青城甲，还有许多家店也值得一试：陈记爆炸土豆、老号尤兔头、蜀香烧烤等都是必吃的店铺。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@热水真好喝'
                    }, {
                        type: 4,
                        text: '电话: 13980469915'
                    }, {
                        type: 4,
                        text: '地址: 都江堰市怀中路药王广场'
                    }]
                }],
                live: [{
                    describe: '归隐赤城仙山，<br>细品时光流转',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_2341.png'),
                    hotelId: '2341',
                    info: [{
                        type: 0,
                        text: '欢墅.青城郡精品温泉度假别墅'
                    }, {
                        type: 1,
                        text: '推荐亮点：别墅位于青城外山红梅社区内，伴天国寺古佛香火，临青城派道教源地，春夏秋冬，景色各异，春季万花盛开，夏季避世消暑，秋季银杏飘洒，冬季白雪莹莹。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/7.png')
                    }, {
                        type: 1,
                        text: '屋内设施齐全，厨房厨具齐备，家庭聚会、朋友轰趴、亲子游戏、BBQ等各种活动，等你的到来。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/8.png')
                    }, {
                        type: 1,
                        text: '每套欢墅还配有私人管家提供细致舒心的服务，让你的出行更加安逸放心。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qingchengshan/9.png')
                    }]
                }]
            }, {
                value: 27,
                label: '峨眉山',
                cover: require('@/assets/images/cityImg/emeishan.png'),
                titleCover: require('@/assets/images/cityTitle/emeishan.png'),
                describe: '峨眉山月半轮秋，<br>影入平羌江水流',
                info: [{
                    type: 1,
                    text: '峨眉山是中国佛教四大名山之一，是世界文化与自然双遗产，峨眉山原有大小寺院百余处，几经兴废，现存主要寺院有万年寺，报国寺，伏虎寺，善觉寺，光相寺，吸引了众多游客。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/emeishan/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@荔枝爱吃蒜'
                }],
                play: [{
                    describe: '会当凌绝顶，<br>一览众山小',
                    info: [{
                        type: 1,
                        text: '趁着早上动身，去看树林中熹微的晨光，峨眉山刀削般的山岩，丰茂的植被，冲天的大树还有绿得发黑的竹林。看到金顶的云海、日光、佛光，看着金光闪闪的庙宇感受到“会当凌绝顶，一览众山小”的豪壮感。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/emeishan/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@荔枝爱吃蒜'
                    }, {
                        type: 1,
                        text: '欣赏峨眉山顶的风景，俯瞰峰峦起伏、苍山如海。葱翠广阔的川西平原上纵横着大渡河、青衣江、岷江茫茫一线，闪耀如银练。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/emeishan/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@USAKI酱'
                    }, {
                        type: 1,
                        text: '去峨眉山也不要忘了峨秀湖，如同中国水墨画般的湖水在阳光下波光粼粼，春夏拍照文艺感极强。'
                    }, {
                        type: 4,
                        text: '电话：0833-553355'
                    }, {
                        type: 4,
                        text: '地址：峨眉山市黄湾镇'
                    }]
                }],
                eat: [{
                    describe: '流着口水走完美食街',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/emeishan/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@LYSEA'
                    }, {
                        type: 1,
                        text: '一天的劳累奔波后在美食街边逛边吃，铁板鱿鱼、豆腐脑、牛肉咔饼最后来一碗冰粉解腻，所有的疲倦都一扫而空，胃和心都被幸福填满。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/emeishan/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@LYSEA'
                    }, {
                        type: 1,
                        text: '来乐山一定要吃豆腐脑，不同于北方的咸豆腐脑或是江浙的甜豆腐脑，乐山的豆腐脑是骨汤和豌豆粉加上少量豆花熬制出汤汁，碗里加入粉丝和汤汁，再放入辣椒油牛肉等佐料，吃一口满口生香，配上牛肉咔饼简直是不摆了。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/emeishan/6.png')
                    }, {
                        type: 1,
                        text: '本地人都推荐的东门豆腐脑一定要去试试。'
                    }, {
                        type: 4,
                        text: '电话：0833-5568210'
                    }, {
                        type: 4,
                        text: '地址：四川省乐山市峨眉山市绥山东路239号'
                    }]
                }],
                live: [{
                    describe: '涓涓温泉入户，<br>秀丽峨眉咫尺',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_724.png'),
                    hotelId: '724',
                    info: [{
                        type: 0,
                        text: '欢墅.山与湖温泉汤屋'
                    }, {
                        type: 1,
                        text: '推荐亮点：位于峨眉山风景区旁，伴山面湖，环境清幽，下楼就是当地特色美食餐饮，宽敞庭院，室内无烟烧烤，精致室内汤池，私密空间，管家自种无公害果蔬与游客分享。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/emeishan/7.png')
                    }, {
                        type: 1,
                        text: '大空间精装修，房间布置美观整洁，大采光面积让你尽情享受阳光。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/emeishan/8.png')
                    }, {
                        type: 1,
                        text: '自带温泉，在欣赏美景的同时可以泡一泡温泉消解一天的疲惫，与好友一起聊天谈心，尽情享受生活的安逸。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/emeishan/9.png')
                    }, {
                        type: 1,
                        text: '房型从二卧到五卧都有，房型丰富，可选择范围广，可满足各种需要，给你最贴心的服务，让旅途更加快乐。'
                    }]
                }]
            }]
        }, {
            value: 3,
            label: "江苏",
            cover: require('@/assets/images/areaTitle/jiangsu.png'),
            list: [{
                value: 30,
                label: '盐城东台黄海森林',
                cover: require('@/assets/images/cityImg/huanghai.png'),
                titleCover: require('@/assets/images/cityTitle/huanghaisenlin.png'),
                describe: '造访天然氧吧——<br>东台黄海森林公园',
                info: [{
                    type: 1,
                    text: '黄海森林公园是江苏沿海唯一的一座规模较大的生态林园，总面积3000公顷，有林面积2500公顷。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/huanghaisenlin/1.png')
                },{
                    type: 3,
                    text: '小红书用户@许益'
                }],
                play: [{
                    describe: '森呼吸·林距离',
                    info: [{
                        type: 1,
                        text: '全境地势平坦，四季分明，森林覆盖率80%以上，不仅是一块生态净土、观光旅游休闲胜地，还是人与自然融合的“绿色氧吧”。'
                    },{
                        type: 1,
                        text: '其间景色独特，交通便捷，身临其境犹如置身于“绿色的海洋”，人工林分林相整齐，景观优美，四季常绿，林分中水杉林，有较高观赏性。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/2.png')
                    },{
                        type: 3,
                        text: '小红书用户@许益'
                    },{
                        type: 1,
                        text: '一望无际的绿色林海，空气质量好到洗涤灵魂，森林里的木屋群落，躺在床上就能望到星空......'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@Sharon郭晓琳'
                    },{
                        type: 4,
                        text: '电话：0515-69969090'
                    },{
                        type: 4,
                        text: '地址：江苏省盐城市东台市沿海经济区花林路8号'
                    }]
                }],
                eat: [{
                    describe: '鱼米之乡，东台特供',
                    info: [{
                        type: 1,
                        text: '盐城东台的特色美食种类多多，富安酥儿饼啦，东台虾池啦，让人垂涎欲滴。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/4.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 1,
                        text: '游森林公园途中，可顺便到附近这家青青家常菜馆吃个午饭。这边家常菜馆比较难找，所幸附近还有这家，若是不想吃西式快餐或是想体验本地味道的游客不妨一试。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/5.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/6.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/7.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/8.png')
                    },{
                        type: 4,
                        text: '电话：15312876179'
                    },{
                        type: 4,
                        text: '地址：江苏省盐城市东台市弶港镇巴斗村'
                    }]
                }],
                live: [{
                    describe: '环抱森林，仰望星空，<br>感受诗意的栖居',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_16971.png'),
                    hotelId: '16971',
                    info: [{
                        type: 0,
                        text: '欢墅·精品度假别墅（东台黄海森林）'
                    },{
                        type: 1,
                        text: '推荐亮点：别墅位于黄海森林公园地标风景区，距离东台高铁站50公里，驾车约50分钟左右抵达。 '
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/10.png')
                    },{
                        type: 1,
                        text: '别墅内配套设施齐全，KTV、棋牌、亲子、厨房等可满足多样需求。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/11.png')
                    },{
                        type: 1,
                        text: '配备超大天窗，独享葱郁森林和浩瀚星空。一共有4种风格主题的户型，满足不同客户群体的居住需求。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/12.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/huanghaisenlin/13.png')
                    }]
                }]
            }, {
                value: 31,
                label: '泰州溱湖',
                cover: require('@/assets/images/cityImg/qinhu.png'),
                titleCover: require('@/assets/images/cityTitle/qinhu.png'),
                describe: '感受大自然的脉搏——<br>姜堰区溱湖国家湿地公园',
                info: [{
                    type: 1,
                    text: '溱湖国家湿地公园自然资源优越，生物类型多样，有国家一类保护动物丹顶鹤、麋鹿，国家二类保护动物白天鹅、白枕鹤、白鹇等等。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/qinhu/1.png')
                },{
                    type: 3,
                    text: '小红书用户@了了'
                }],
                play: [{
                    describe: '从海洋世界到湿地花海，<br>精彩看不停！',
                    info: [{
                        type: 1,
                        text: '一进景区大门就是溱湖海洋世界，海洋馆不是很大，有各种水母缸加上各色的灯光，拍出的照片也很美，上午会有一场秀，带小朋友的可以看一看。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/2.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/3.png')
                    },{
                        type: 1,
                        text: '然后可以移步中国溱湖湿地科普馆，介绍湿地的动植物、文化特色，场馆建设的很漂亮，有各种大型场景，很有科技和文艺气息，其实可以慢慢走慢慢欣赏。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@香菜味小饼干'
                    },{
                        type: 1,
                        text: '下了电瓶船没多久就走上一个水上栈道，一路走过去，湖水清澈见底，小野鸭时隐时现，睡莲和莫奈的油画一样好看，充分感受大自然的气息。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@了了'
                    },{
                        type: 4,
                        text: '电话：0523-88623022'
                    },{
                        type: 4,
                        text: '地址：江苏省泰州市姜堰区溱潼镇溱湖大道1号'
                    }]
                }],
                eat: [{
                    describe: '古镇觅美食——<br>溱潼古镇小吃街',
                    info: [{
                        type: 1,
                        text: '溱湖湿地旁边就是溱潼古镇，古色古香的小巷中，也藏着一整条的小吃街，吃货可不能错过呀！黄桥烧饼、桂花米糕、靖江肉脯、鱼圆鱼丸……街头小吃，香气四溢，勾人馋虫。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/6.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@Yang'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@咩咩Rinko'
                    },{
                        type: 1,
                        text: '古镇里面这家店的百花米糕是当地传统美食，制作糕点的雕花模板已传承千年。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/10.png')
                    },{
                        type: 4,
                        text: '电话：18761088246'
                    },{
                        type: 4,
                        text: '地址：江苏省泰州市姜堰区溱潼镇溱湖街4号娱乐城门口'
                    }]
                }],
                live: [{
                    describe: '荡舟在烟波浩渺之上，<br>沉醉于世外桃源之中',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_372.png'),
                    hotelId: '372',
                    info: [{
                        type: 0,
                        text: '欢墅·溱湖湿地公园'
                    },{
                        type: 1,
                        text: '推荐亮点：位于“麋鹿故乡园”溱湖湿地公园之内；所有别墅均为一线湖景，可随意泛舟溱湖；步行8分钟即达云海高尔夫及温泉会所；既有现代大气简约欧式风格、也有经典传统古色古香中式风格。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/11.png')
                    },{
                        type: 1,
                        text: '别墅内配备独立娱乐设备KTV点歌欢唱系统，棋牌室，茶室，露天烧烤，烘培室，烘托出特定的居住风格。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/12.png')
                    },{
                        type: 1,
                        text: '建于溱湖之上，独享静谧居处'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/13.png')
                    },{
                        type: 1,
                        text: '房间大气宽敞，是携带家人入住的最佳选择'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinhu/14.png')
                    }]
                }]
            }, {
                value: 32,
                label: '无锡拈花湾',
                cover: require('@/assets/images/cityImg/nianhuawan.png'),
                titleCover: require('@/assets/images/cityTitle/nianhuawan.png'),
                describe: '青山绿水间的古佛胜境——<br>拈花湾古镇',
                info: [{
                    type: 1,
                    text: '沾花湾古镇是位于无锡市区外的一处禅意胜地，其中的没一家客栈都是一种修行，一花一世界，一叶一菩提，禅意体验，超凡享受，让心灵度个假。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/nianhuawan/12.png')
                },{
                    type: 3,
                    text: '小红书用户@江南的猫先森'
                }],
                play: [{
                    describe: '让你的心平静下来，<br>走进拈花小镇',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/1.png')
                    }, {
                        type: 3,
                        text: '小红书用户@大菊在路上'
                    }, {
                        type: 1,
                        text: '唐风建筑群，每一栋建筑都是一种文化的体现，每进一个院落，都是对禅意的领悟。夜间灯火绚烂丝毫不逊色于都市灯火。这样的地方，最能让人平心静气。穿越时空，梦回大唐。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@大菊在路上'
                    }, {
                        type: 1,
                        text: '灵山圣境是中国最为完整、也是唯一集中展示释迦牟尼成就的佛教文化主题园区。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@LeYo'
                    }, {
                        type: 1,
                        text: '大佛慈颜微笑，广视众生，右手"施无畏印"代表除却痛苦，左手"施与愿印"代表给予快乐，均为祝福之相，整个佛像形态庄严圆满，安详凝重而细致，显现佛陀慈悲的法相。'
                    }, {
                        type: 4,
                        text: '电话：(0510)85086637'
                    }, {
                        type: 4,
                        text: '地址：滨湖区环山西路68号'
                    }]
                }],
                eat: [{
                    describe: '特色禅食与无锡美食的双重体验，<br>味觉享受不可错过',
                    info: [{
                        type: 1,
                        text: '特色禅食，无锡素面为拈花湾景区不容错过的两大素食佳肴。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@拈花湾景区'
                    }, {
                        type: 1,
                        text: '景区内的禅食，每一道都算得上是一件艺术品。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@美美'
                    }, {
                        type: 1,
                        text: '无锡小笼也是无锡美食的一道招牌,无锡小笼以上等面粉制作，皮薄却不漏，味鲜而不腻，红色的肉馅加上满满的卤水，格外的鲜甜。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@美美'
                    }, {
                        type: 1,
                        text: '说到无锡小笼在拈花湾必然是拈花锡食，纯藏着地道的无锡味——拈花锡食，合理古木和青砖的交互打造出无锡的古韵街道之感，干净简洁，却不缺乏清新，让你在吃的过程中感受不一样的烟火之气。'
                    }, {
                        type: 4,
                        text: '电话：18761595753'
                    }, {
                        type: 4,
                        text: '地址：拈花湾古镇香月花街2-121号'
                    }]
                }],
                live: [{
                    describe: '青山绿水间的世外仙境',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_4.png'),
                    hotelId: '4',
                    info: [{
                        type: 0,
                        text: '欢墅·拈花湾精品度假屋'
                    }, {
                        type: 1,
                        text: '推荐亮点：景区精品度假屋，古竹环绕，背倚大佛，家具布置精心，设备齐全，绿意盎然。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/7.png')
                    },{
                        type: 1,
                        text: '云影相映，床品柔软舒适，令你拥有一夜酣睡。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/8.png')
                    },{
                        type: 1,
                        text: '大床房，双床房，小筑，小墅多样选择。柔软床品，让你一觉到天亮，醒来后再无任何烦恼。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/9.png')
                    },{
                        type: 1,
                        text: '公寓内家具精心布置，高端典雅，色调适宜，让人体验家一般的感觉，奢华的享受，超值的价格，堪称圣境首选。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/10.png')
                    },{
                        type: 1,
                        text: '全套家具，拎包入住。安全保障全面升级，12个安心触点为您服务。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/nianhuawan/11.png')
                    },{
                        type: 1,
                        text: '蓝天深邃而幽静，漫步河湖边，尽情欣赏自然之美。'
                    }]
                }]
            }, {
                value: 33,
                label: '阳山',
                cover: require('@/assets/images/cityImg/yangshan.png'),
                titleCover: require('@/assets/images/cityTitle/yangshan.png'),
                describe: '江南一绝，<br>走进真正的世外桃源',
                info: [{
                    type: 1,
                    text: '阳山古称“安阳山”。距江南旅游名城无锡市15公里。四座山丘雄伟壮观，林壑优美。阳山以万亩桃花、亿年古火山、千年古刹著称于世。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/yangshan/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@黑少Miko'
                }],
                play: [{
                    describe: '桃源景中游，感受桃文化',
                    info: [{
                        type: 1,
                        text: '走进阳山，门楼、桃文化博览馆、竹海、百果采摘园、白鹭栖息地、古火山、朝阳禅寺、安阳书院等标志性建筑，无不让人流连忘返。与身边人漫步花间湖畔，“武陵渔人”所观之景，就在你的眼前，千万别迷了路。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/2.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 4,
                        text: '电话： 0510-83695888'
                    },{
                        type: 4,
                        text: '地址：江苏省无锡市惠山区桃源西路'
                    }],
                }],
                eat: [{
                    describe: '街巷、半山、田园都是美食隐藏地',
                    info: [{
                        type: 1,
                        text: '无锡一特色小吃闻名，有麦饼、糕团、桃胶等特产小吃。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/3.png')
                    }, {
                        type: 3,
                        text: '搜狐网'
                    }, {
                        type: 1,
                        text: '薄如纸张，圆如满月，捏之不牢，随风而去；下风三里，即闻其香；轻轻一咬，“咯嘣”声，脆、糯、酥、韧，满口清香，数日不去。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/4.png')
                    }, {
                        type: 3,
                        text: '搜狐网'
                    }, {
                        type: 1,
                        text: '所有糕团制作均不添加色素，采用纯天然的果蔬汁上色，青团充满麦香，桂花糕则是桂花的香甜，甜、糯口感让人身心皆满足。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@糖炒栗子多多'
                    }, {
                        type: 1,
                        text: '推荐街巷老宅门的风韵老店老俞家，极尽的味蕾享受。古香古韵，环境优美。'
                    },{
                        type: 4,
                        text: '电话：0510-83052977'
                    },{
                        type: 4,
                        text: '地址：无锡市惠山区天力路中国石化加油站陆区站东北侧'
                    }],
                }],
                live: [{
                    describe: '典雅风韵，温馨居所',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_7830.png'),
                    hotelId: '7830',
                    info: [{
                        type: 0,
                        text: '欢墅·度假别墅（无锡阳山拾房桃溪）'
                    }, {
                        type: 1,
                        text: '推荐亮点：交通便利，文化氛围浓郁，引领田园综合时尚潮流，设备齐全，风格典雅，布置精心。提供行李寄存，早餐服务，贴心周到。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/6.png')
                    }, {
                        type: 1,
                        text: '住区内处处是美景，超高绿化，花香扑鼻。私家花园，轻奢享受。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/7.png')
                    }, {
                        type: 1,
                        text: '蓝天绿草，空气清新，使人有一种融入大自然的感觉。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/8.png')
                    }, {
                        type: 1,
                        text: '精心布置的客厅，全套的家具，高端典雅，极致享受。木质材料，尽显温和。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yangshan/9.png')
                    }, {
                        type: 1,
                        text: '大窗采光，宽敞明亮，柔软床品，让你一夜酣睡，第二天醒来精神饱满的开始新的旅程。贴心布置，多样选择，因人而置。'
                    }]
                }]
            }, {
                value: 34,
                label: '苏州',
                cover: require('@/assets/images/cityImg/suzhou.png'),
                titleCover: require('@/assets/images/cityTitle/suzhou.png'),
                describe: '江南水乡，人间天堂',
                info: [{
                    type: 1,
                    text: '岁月更迭、时代变迁，苏州城早已不是原来的模样，但即便千百年过去，每当人们谈论起心中的江南水乡，依然能从这里的小桥流水、青瓦白墙、亭台楼榭中，看到这方水土的钟灵毓秀、繁荣富庶、风流潇洒，也看到这座城市2500年来经久不衰的生命力。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/suzhou/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@Demon boaつ'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/suzhou/2.png')
                }, {
                    type: 3,
                    text: '小红书用户@齐小七'
                }],
                play: [{
                    describe: '与天堂齐名的存在，<br>绝美温柔乡',
                    info: [{
                        type: 1,
                        text: '苏州东傍上海，南接浙江，西抱太湖，北依长江。依山傍水，如诗画般的烟雨江南在苏州得到完美的体现。江南水乡古镇的建筑风格，大量的民居古镇，反应淳朴的生活气息，百姓安逸的生活让人向往。苏州人杰地灵，有周庄古镇、拙政园、大阳山自然公园等著名景点。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/suzhou/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@刘聪lclclc'
                    }, {
                        type: 1,
                        text: '“水乡小巷多，人家尽枕河”周庄，因水而有鲜活的生命，小桥流水充满诗情画意，快带上你的小伙伴一起来欣赏这样的美景吧。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/suzhou/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@刘聪lclclc'
                    }],
                }],
                eat: [{
                    describe: '美景配佳肴，<br>人生难得几逍遥',
                    info: [{
                        type: 1,
                        text: '苏州，吴文化发祥地，又称姑苏，是国家历史文化名城和风景旅游城市，苏州不仅风景优美,还有丰富多样的特色小吃，酱汁肉、松鼠桂鱼、哑巴生煎等一系列美食，让人难忘江南的味道。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/suzhou/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Momo日记'
                    }, {
                        type: 1,
                        text: '苏帮菜榜首——松鼠桂鱼，汤汁浓郁，酸甜适中，爽滑可口，乾隆皇帝下江南时亲点名菜。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/suzhou/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@狎鸥亭呀'
                    }, {
                        type: 1,
                        text: '哑巴生煎是江苏苏州传统特色小吃，“哑巴生煎”这个品牌在苏州至少有五十年，早已成为一代苏州人的情节，品尝哑巴生煎，感受一下本地人对苏州的绵绵情意。'
                    }],
                }]
            }, {
                value: 35,
                label: '溧阳',
                cover: require('@/assets/images/cityImg/liyang.png'),
                titleCover: require('@/assets/images/cityTitle/liyang.png'),
                describe: '苏杭生态经济带上的明星——潥阳',
                info: [{
                    type: 1,
                    text: '潥阳位于江苏省西南部，地处长江三角洲，宁杭生态经济带上的重要副中心城市和示范区。标示着“绿水青山就是金山银山”的旅游胜地。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/liyang/1.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/liyang/2.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/liyang/3.png')
                },{
                    type: 3,
                    text: '小红书用户@三恒系统黄顺珍'
                }],
                play: [{
                    describe: '花、竹之海，<br>自驾游宝藏胜地——曹山度假景区',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/liyang/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@垂钓四海娱乐'
                    }, {
                        type: 1,
                        text: '曹山花海，无尽的争相斗艳，尽收眼底，使人动容。呼吸花田果园的甜蜜气息，与大自然融为一体。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@垂钓四海娱乐'
                    }, {
                        type: 1,
                        text: '天目湖山水园，观一湖而知江南，碧水蓝天，尽享山水，江南明珠，碧水仙境。带上自己的娃，来一场别开生面的湖畔之旅。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@哎呦小鹿'
                    }, {
                        type: 1,
                        text: '更有南山竹海与御水温泉，视觉的享受，加上温泉的滋养，让人仿佛全身都得到完全的放松。与孩子一起享受竹林漫步的感觉。'
                    },{
                        type: 4,
                        text: '电话：曹山游客中心0519-87731118'
                    },{
                        type: 4,
                        text: '地址：上兴镇永兴大道36号'
                    }]
                }],
                eat: [{
                    describe: '潥阳曹山获奖名菜，等你品尝',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/liyang/7.png')
                    }, {
                        type: 1,
                        text: '豆花的嫩滑，油条的酥脆，再加上鱼蓉的细腻口感，使得这道“豆花油条鱼”淡而不寡、油而不腻、鲜而不腥。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/8.png')
                    }, {
                        type: 1,
                        text: '庆贵包子、酱焗鱼头、辣子鸡、白切羊肉、肉酿秋葵……更是让人垂涎三尺。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/9.png')
                    }, {
                        type: 1,
                        text: '门店则推荐老穿巷柠檬鱼，虽然看着不起眼，但这家店鱼的口感鲜美，而且价格公道，物超所值，就是饭点人很多，需要排队。'
                    },{
                        type: 4,
                        text: '电话：15806140415'
                    },{
                        type: 4,
                        text: '地址：常州市溧阳市永兴大道嘉缘小区'
                    }]
                }],
                live: [{
                    describe: '亲子乐园，温馨家园，实惠超值',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_784.png'),
                    hotelId: '784',
                    info: [{
                        type: 0,
                        text: '欢墅·曹山亲子庄园'
                    }, {
                        type: 1,
                        text: '推荐亮点：千亩湖景大草坪养眼宜人，儿童专属主题房，距采摘园仅一公里。英伦特色别墅，交通便利，紧邻公路。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/10.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Fiona'
                    }, {
                        type: 1,
                        text: '家具家电一应俱全，三大保障标准化运营，提供叫醒、租车、加床、早餐服务，贴心周到。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/11.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/12.png')
                    }, {
                        type: 1,
                        text: '厨、卫整洁干净，24小时全天热水，定期消毒，一切为了你的健康与舒适。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/13.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/14.png')
                    }, {
                        type: 1,
                        text: '环湖别墅，随时可以游湖，骑行。休假放松必住，通过运动与赏景放松身心。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/15.png')
                    }, {
                        type: 1,
                        text: '英伦风，别墅独院草坪，体验异国居住风格。自由安静，环境优雅。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/liyang/16.png')
                    }]
                }]
            }]
        }, {
            value: 4,
            label: "云贵陕",
            cover: require('@/assets/images/areaTitle/yunguishan.png'),
            list: [{
                value: 40,
                label: '大理洱海',
                cover: require('@/assets/images/cityImg/erhai.png'),
                titleCover: require('@/assets/images/cityTitle/erhai.png'),
                describe: '苍山之麓，洱海之滨',
                info: [{
                    type: 1,
                    text: '大理，云南白族自治州首府，坐落于云贵高原上的洱海平原，是首批被列入国家24个历史文化名城之一，两代古朝都城；绵长悠久沉淀出的历史文化魅力等着你来探索。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/erhai/1.png'),
                }, {
                    type: 2,
                    text: require('@/assets/images/city/erhai/2.png'),
                }, {
                    type: 3,
                    text: '小红书@一罐热茶',
                }, {
                    type: 0,
                    text: '悠久绵长的历史沉淀'
                }, {
                    type: 1,
                    text: '古城始建于明代，至今已有700年历史，整体保存良好，一城之内便有14处重点文物保护单位，在众多古城中独具一格。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/erhai/6.png'),
                }, {
                    type: 3,
                    text: '小红书@超级Lynn',
                },],
                play: [{
                    describe: '苍山巍峨，洱海壮阔',
                    info: [{
                        type: 1,
                        text: '苍山、洱海交辉相应，古镇、高塔屹然耸立，大理古城、双廊古镇带你回溯历史本源，磻溪渡口、龙龛码头、大理大学让你感受不一样的人文情怀。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/3.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/4.png'),
                    }, {
                        type: 3,
                        text: '小红书@Greenmo.Lee',
                    }]
                }, {
                    describe: '开启一场小资文艺之旅',
                    info: [{
                        type: 1,
                        text: '来到大理古城，在高耸屹立的五华楼上远望苍山、俯览古城，胸中自有豪情壮阔。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/7.png'),
                    }, {
                        type: 3,
                        text: '小红书@超级Lynn',
                    }, {
                        type: 1,
                        text: '城南门口打卡必到，在城墙上俯瞰洱海，享受视觉盛宴；人民路既繁华热闹，古朴文艺，不失为午后慵懒闲逛首选之地。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/8.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/9.png'),
                    }, {
                        type: 3,
                        text: '小红书@林琛Live',
                    }, {
                        type: 1,
                        text: '更有大元帅府快速带你浏览大理历史，酒吧街醉人飘香，洋人街领略异国风情……'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/10.png'),
                    }, {
                        type: 3,
                        text: '小红书@林琛Live',
                    }, {
                        type: 1,
                        text: '如果在古城玩儿累了，不妨去走出古城去爬一爬苍山、游一游洱海，领略一下自然的巍峨壮阔，在清幽宁静的山林里或在闲适轻柔的海风中放松心情，沉淀自我。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/11.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/12.png'),
                    }, {
                        type: 3,
                        text: '小红书@鑫言鑫境',
                    }, {
                        type: 4,
                        text: '电话：0872-2670396',
                    }, {
                        type: 4,
                        text: '地址：云南省大理白族自治州大理市一塔路42号',
                    }]
                }],
                eat: [{
                    describe: '高原上的特色美食',
                    info: [{
                        type: 1,
                        text: '炸乳扇、饵丝、凉鸡米线、过桥米线、豌豆粉、米凉虾酸甜咸辣各色俱全，给你不一样的食味之旅。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/5.png'),
                    }, {
                        type: 3,
                        text: '小红书@慢屋MUNWOOD',
                    }]
                }, {
                    describe: '什么样的美味能让人垂涎三尺？',
                    info: [{
                        type: 1,
                        text: '大理古城除开人尽皆知的云南过桥米线，烤乳扇、烤饵块、包浆豆腐、傣味鸡脚等等更是老字号招牌美食，值得你的青睐，满足你的味蕾。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/13.png'),
                    }, {
                        type: 3,
                        text: '小红书@EvanMou',
                    }, {
                        type: 1,
                        text: '当然还有最最正宗地道的少数名族小吃，十年白族老店——渔香园老白族石板烧，味道绝对正宗一流，秘制五花肉、大刀牛肉、龙船茄子光是听名字就已经忍不住食指大动。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/14.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/15.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/16.png'),
                    }, {
                        type: 3,
                        text: '小红书@我是茹梦呀',
                    },{
                        type: 4,
                        text: '电话：13887232202'
                    },{
                        type: 4,
                        text: '地址：云南省大理白族自治州大理市大理古城大理镇叶榆路与平等路交叉口72 号'
                    }]
                }],
                live: [{
                    describe: '住在洱海边，睡醒就看海',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_482.png'),
                    hotelId: '482',
                    info: [{
                        type: 0,
                        text: '斯维登·大理洱海龙湾度假公寓'
                    }, {
                        type: 1,
                        text: 'Loft无敌海景套房，尽收洱海美景于眼底，坐在房间即可观尽苍山洱海；酒店房间温馨舒适、干净整洁，配套设施齐全高档。交通便利，出行放心。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/17.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/18.png'),
                    }, {
                        type: 1,
                        text: '周边景色也是秀丽壮阔，毗邻洱海，在有居家式的住房体验同时又能感受到大自然的怀抱与亲近。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/erhai/19.png'),
                    },]
                }]
            }, {
                value: 41,
                label: '玉溪',
                cover: require('@/assets/images/cityImg/yuxi.png'),
                titleCover: require('@/assets/images/cityTitle/yuxi.png'),
                describe: '云烟之乡、花灯之乡',
                info: [{
                    type: 1,
                    text: '大理到玉溪距离稍远约三百多公里，驾车四小时左右，但距离不是问题。比大理更加安逸、比泸沽湖宁静、比香格里拉震撼，这个风情万种的城市一定能get到你的点！'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/yuxi/1.png'),
                }, {
                    type: 2,
                    text: require('@/assets/images/city/yuxi/2.png'),
                }, {
                    type: 3,
                    text: '小红书@zuzuche',
                }],
                play: [{
                    describe: '游离仙境，不染尘埃',
                    info: [{
                        type: 1,
                        text: '抚仙湖、星云湖、澄江田园、蓝花楹花海这一处处仿若隔绝人世、空灵出尘的仙境可能才会让人真正体会到什么叫做“非淡泊不以明志，非宁静无以致远”吧。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/3.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/4.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/5.png'),
                    }, {
                        type: 3,
                        text: '小红书@zuzuche',
                    }, {
                        type: 4,
                        text: '电话：078776911280',
                    }, {
                        type: 4,
                        text: '地址：云南省玉溪市江川区澄川线（抚仙湖）',
                    }]
                }],
                eat: [{
                    describe: '逛夜市，赏灯海，吃美食',
                    info: [{
                        type: 1,
                        text: '玉溪青花街夜市，在这里你不仅能够吃到各种特色美食小吃，干锅鸡、石锅拌饭、水果冰粉、烧烤应有尽有，还能赏灯海，走进人间烟火。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/6.png'),
                    }, {
                        type: 3,
                        text: '小红书@AO萌萌家'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/7.png'),
                    }, {
                        type: 3,
                        text: '小红书@_zhoency'
                    }, {
                        type: 1,
                        text: '夏日游玩推荐打卡地本宫的冰，便宜好吃，清甜解暑，有三个口味：芒果、草莓、奥利奥，最下面是果酱，然后是绵绵冰，然后是鲜果哦。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/8.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/9.png'),
                    }, {
                        type: 3,
                        text: '小红书@狂吃不瘦的小余',
                    }, {
                        type: 4,
                        text: '电话：（街区无电话）',
                    }, {
                        type: 4,
                        text: '地址：云南省玉溪市红塔区红塔大道95号',
                    }]
                }],
                live: [{
                    describe: '给自己放个假',
                    // qrCodeImg: require('@/assets/images/qrCodeImg/hotel_8142.png'),
                    // hotelId: '8142',
                    info: [{
                        type: 0,
                        text: '欢墅 • 精品度假屋（抚仙湖欢乐大世界）'
                    }, {
                        type: 1,
                        text: '推荐亮点：地理位置绝佳，位于云南十大文旅项目之一云南寒武纪小镇欢乐大世界园区内，坐拥抚仙湖风光及万亩欢乐王国。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/10.png')
                    }, {
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/11.png')
                    }, {
                    }, {
                        type: 1,
                        text: '周边配套有海洋馆、野生动物园、国际马戏团等给你带来欢声笑语与自然之美；还可以在湖边观赏日落和日出哦。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yuxi/12.png')
                    }, {
                        type: 3,
                        text: '小红书@城宿'
                    }]
                }]
            }, {
                value: 42,
                label: '安顺',
                cover: require('@/assets/images/cityImg/anshun.png'),
                titleCover: require('@/assets/images/cityTitle/anshun.png'),
                describe: '不曾去想天有多高，<br>世界上总是有那么一个地方，让人魂牵梦绕。',
                info: [{
                    type: 1,
                    text: '贵州地处云贵高原是一个多民族共居的省份，安顺则是贵州第三大城市也是全国唯一的“深化改革，促进多种经济成分共生繁荣，加快发展”改革试验区，民用航空产业国家高技术产业基地，贵州历史文化名城，是“贵州加快发展的经济特区”，世界喀斯特风光旅游优选地区，全国六大黄金旅游热线之一和贵州西部旅游中心。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/anshun/1.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/anshun/2.png')
                },{
                    type: 3,
                    text: '小红书用户@langdon'
                },{
                    type: 0,
                    text: '别眨眼，来一起感受黄果树瀑布的震撼'
                },{
                    type: 1,
                    text: '黄果树瀑布位于贵州安顺市区西南一小时车程的地方，属喀斯特地貌中的侵蚀裂典型瀑布，以水势浩大著称。黄果树瀑布出名始于明代旅行家徐霞客，经过历代名人的游历、传播，成为知名景点。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/anshun/6.png')
                },{
                    type: 3,
                    text: '小红书用户@私享世界'
                }],
                play: [{
                    describe: '游少数民族聚落，<br>赏自然山川美景',
                    info: [{
                        type: 1,
                        text: '作为中国优秀旅游城市之一，安顺拥有丰富的旅游资源，这里是多民族聚居的地区，仡佬族、苗族、布依族等少数民族在这片古老的土地上繁衍生息，形成了独特的文化习俗。民族节日丰富多彩，古风犹存。安顺瀑布成群，洞穴成串，真山真水，奇特壮观，山水洞瀑浑然一体的整体美、形象美、色彩美突出地表现了旅游资源的特色，众多的文物古迹给这片土地增添了无穷的生命力。黄果树瀑布、镇远古城等更是安顺必去的知名景点。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@Borje'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@nono'
                    }],
                },{
                    describe: '“一见”收藏黄果树',
                    info: [{
                        type: 1,
                        text: '世界上很多的你以为其实都是错的。就比如，你以为黄果树瀑布只是一个瀑布。'
                    },{
                        type: 1,
                        text: '不同河水顺着阶梯式地势而下，河床断落，中断了前路，于是奔涌的水流在断崖处乘着风一跃而下飞入深渊，于是成就了一场华丽的变身。有水帘洞、银链坠潭瀑布、黄果树6D影院等打卡圣地。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/7.png')
                    },{
                        type: 3,
                        text: '黄果树瀑布景区官网'
                    },{
                        type: 1,
                        text: '86年版《西游记》中花果山水帘洞曾给中外观众留下了美好而深刻的印象。 穿越水帘洞不仅能亲临美猴王府邸还可从各个洞窗中观赏到犀牛潭上的彩虹。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/8.png')
                    },{
                        type: 3,
                        text: '黄果树瀑布景区官网'
                    },{
                        type: 1,
                        text: '银链坠潭瀑布，在黄果树瀑布群中，它既不是以高取胜，也不是以阔或大惊人，而是以它那千丝万缕的情态和如泣如诉的瀑声，让人看见就不想离开。'
                    },{
                        type: 4,
                        text: '电话：(0851)33592136'
                    },{
                        type: 4,
                        text: '地址：贵州省镇宁布依族苗族自治县黄果树镇贵黄公路(黄果树风景名胜区)'
                    }],
                }],
                eat: [{
                    describe: '香辣鲜美，高原上的美食享不尽',
                    info: [{
                        type: 1,
                        text: '贵州富丽山川，自然资源丰富，各个少数民族都有自己的饮食文化，因而美食各具特色，千万种美食，引得国内外旅客慕名而来，来到贵州仿佛就进入了，美食的天堂。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@苗侗老凯里酸汤鱼'
                    },{
                        type: 1,
                        text: '制作原料主要有鱼肉、酸汤、山仓子等香料。成菜后，略带酸味、幽香沁人、鲜嫩爽口开胃，是贵州“黔系”菜肴的代表。'
                    }],
                },{
                    describe: '舌尖上的安顺，<br>印象里的贵州',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/anshun/9.png')
                    },{
                        type: 3,
                        text: '搜狐网'
                    },{
                        type: 1,
                        text: '夺夺粉小火锅，安顺特有的一种小火锅，类似火锅又完全不同于火锅，在一锅由店家配好的很稠的汤锅(汤锅由有西红柿、糟辣椒等制作的)端上来以后，就可以点菜了，火腿肠是必不可少的配菜，此外还有蛋饺、粉丝、藕片、二块耙、冻魔芋等等，再加一份时鲜蔬菜，经济实惠又美味。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/10.png')
                    },{
                        type: 3,
                        text: '搜狐网'
                    },{
                        type: 1,
                        text: '一种传统早点。又叫"马泡"。因其制作简单，携带方便，价格便宜，受到人们的普遍喜爱。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/11.png')
                    },{
                        type: 3,
                        text: '大众点评用户@七小囍'
                    },{
                        type: 1,
                        text: '贵水瑶餐厅，贵水瑶逐步打造具有贵州特色的餐饮门店，布依族装修风格，酸汤鱼口味地道，出行美食首选。'
                    },{
                        type: 4,
                        text: '电话：0851-38886288'
                    },{
                        type: 4,
                        text: '地址：安顺市镇宁布依族苗族自治县迎宾大道黄果树客运站东侧约90米迎宾大道88号'
                    }],
                }],
                live: [{
                    describe: '旅游城旁温馨公寓',
                    info: [{
                        type: 0,
                        text: '安顺斯维登度假公寓（万象城青瓦台）'
                    },{
                        type: 1,
                        text: '推荐亮点:黄金地段，交通便利，核心商业区，购物者的天堂，新中式装修设计风格典雅而不失豪华，设备齐全，温馨舒适，直面黄果树，尽尝小吃街。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/12.png')
                    },{
                        type: 1,
                        text: '外观典雅，黄金路段，豪华公寓，交通便利。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/13.png')
                    },{
                        type: 1,
                        text: '新中式风格设计，精美外观，让人充满期待与新鲜感。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/14.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/15.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/16.png')
                    },{
                        type: 1,
                        text: '大床房、双床房，任你选择，柔软精选床品，一切为了你的舒适睡眠，独立客厅，无线网络，设备已经俱全，如在家中一样便利，提供叫醒、早餐服务，贴心周到。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/anshun/17.png')
                    },{
                        type: 1,
                        text: '整洁独立卫浴，24小时热水供应，生活用品，一应俱全，一扫出游带来的疲惫。'
                    }]
                }]
            }, {
                value: 43,
                label: '遵义',
                cover: require('@/assets/images/cityImg/zunyi.png'),
                titleCover: require('@/assets/images/cityTitle/zunyi.png'),
                describe: '红色圣地，西南交通枢纽',
                info: [{
                    type: 1,
                    text: '遵义是一个蕴含红色革命文化的地方，一个山川秀美，人杰地灵的贵州旅游胜地。有遵义古城，遵义会议遗址，娄山关景区等人文自然美景，风光无限。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/zunyi/1.png')
                },{
                    type: 3,
                    text: '小红书用户@牧也同学'
                }],
                play: [{
                    describe: '川黔大观，大美娄山关',
                    info: [{
                        type: 1,
                        text: '娄山关亦称太平关，原名娄珊关、娄关，后称太平关。位于汇川区与桐梓县交界处，是川黔交通要道上的重要关口。关上千峰万仞，重峦叠峰，峭壁绝立，若斧似戟，直刺苍穹，川黔公路盘旋而过。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/2.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 1,
                        text: '娄山关脚下，有一神奇怪异的喀斯特溶洞——娄山关溶洞。其洞幽深、宽大，奇诡怪异，千般万种，究竟有多深，据说那些探险者也未走到洞的尽头，惟有从大娄山腹部涌出的那股清泉才能揭开她的神秘……'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/3.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 1,
                        text: '娄山关以著名的红军战斗遗址而名扬天下。现在各种军事工事、战壕、摩岩石刻、碑牌保存完好，令多少中外游客流涟忘返，对革命先烈深深的敬意和缅怀'
                    },{
                        type: 4,
                        text: '电话：(0851)28795555'
                    },{
                        type: 4,
                        text: '地址：贵州省遵义市汇川区板桥镇'
                    }]
                }],
                eat: [{
                    describe: '遵义美食，贵州味道',
                    info: [{
                        type: 1,
                        text: '遵义作为贵州有名的旅游胜地，其美食文化是贵州美食文化的重要组成部分，有虾子羊肉粉，豆花面，鸭溪凉粉等特色美食，香鲜五味，令人垂涎。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@卢卢卢'
                    },{
                        type: 1,
                        text: '虾子羊肉粉，遵义传统美食，清香味鲜、滚烫香辣。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/5.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 1,
                        text: '遵义特色美食，咸鲜适口、柔嫩鲜软。柔嫩的豆花，香辣的红油，给你的味蕾来一次极致享受。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@Fi哩啡哩'
                    },{
                        type: 1,
                        text: '众人熙熙农家乐，树林里的宝藏小店，环境优美，不拘一格，与城市喧嚣形成鲜明对比，菜色齐全，地道遵义味。'
                    },{
                        type: 4,
                        text: '电话：(0851)28438888'
                    },{
                        type: 4,
                        text: '地址：贵州省遵义市红花岗区忠庄镇桃溪寺儿童福利院'
                    }]
                }],
                live: [{
                    describe: '青山绿水间的养生圣地',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_12129.png'),
                    hotelId: '12129',
                    info: [{
                        type: 0,
                        text: '遵义斯维登度假公寓'
                    },{
                        type: 1,
                        text: '推荐亮点：4A风景区娄山关风景区内，青山绿水间的精致客房，森林山泉养生，设备齐全，布置温馨，交通便利。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/7.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/8.png')
                    },{
                        type: 1,
                        text: '选址得天独厚，青山绿水间的现代舒适公寓。空气清新，景色宜人，养生胜地。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/10.png')
                    },{
                        type: 1,
                        text: '双人房、大床房，独立阳台，精选床品，一切为了你安逸的睡眠，保障你的睡眠质量。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zunyi/12.png')
                    },{
                        type: 1,
                        text: '整洁卫浴生活用品一应俱全，便利无比。'
                    }]
                }]
            }, {
                value: 44,
                label: '西安',
                cover: require('@/assets/images/cityImg/xian.png'),
                titleCover: require('@/assets/images/cityTitle/xian.png'),
                describe: '“天然历史博物馆”，<br>赏华夏文化古城之最',
                info: [{
                    type: 1,
                    text: '西安的美，让人感到厚重。在那任何一块砖瓦中，都能找寻到历史，耳边也回响着诗歌的名句。玄奘西行的出发地，陆上丝绸之路之源。西安位于黄河西岸渭水平原的中部。这里是良田纵横,一目万顷的八百里秦川，物华天宝，人杰地灵在中华大地上，镶嵌在黄土高原南端的这颗耀眼的明珠。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/xian/1.png')
                },{
                    type: 3,
                    text: '小红书用户@小红薯5EA4871C'
                },{
                    type: 0,
                    text: '千年时空之旅——西安古迹周游'
                },{
                    type: 1,
                    text: '中国历史上最著名的城垣建筑之一，也是中国现存最完整的一座古代城垣建筑，更是历史留下的一 份属于全人类共有的文化财富。西安古城是历史变迁的见证者。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/xian/5.png')
                },{
                    type: 3,
                    text: '小红书用户@县当地向导王瑞雪'
                }],
                play: [{
                    describe: '长相思，在长安',
                    info: [{
                        type: 1,
                        text: '西安，18朝古都，有过名震寰宇、无比辉煌的历史文化，也有着绿水青山、无比秀媚的自然景观。西安，人杰地灵，在千百年人文与自然演化中，为我们留下无数文化宝藏，有西安城墙，大雁塔，终南山，华山等自然人文景观。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/2.png')
                    },{
                        type: 3,
                        text: '小红书用户@大菊在路上'
                    },{
                        type: 1,
                        text: '大雁塔古塔宏伟，寺殿香火缭绕，庭院鲜花争艳，是一处特别吸引国内外游人的游览胜地。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@精壮的小南僧'
                    },{
                        type: 1,
                        text: '它是世界八大奇迹之一,兵马俑真是气势磅礴,气势恢弘,是中华民族的一大瑰宝。八千陶俑组成的古代严密的军阵，是秦始皇地下王国的象征。其磅礴的气势，展示了秦王朝大帝国"马上得天下"的风貌。'
                    }]
                },{
                    describe: '西安历史文脉的体现——<br>西安古城',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/xian/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@县当地向导王瑞雪'
                    },{
                        type: 1,
                        text: '西安城墙，作为古都的守护者，以其独特的魅力向世人展现着她的恢弘、壮丽和博大，向世界展示着古都的深邃、智慧和兼容并蓄。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@爱吃面包脸会大'
                    },{
                        type: 1,
                        text: '大唐西市是国内唯一在唐长安西市原址上再建的以盛唐文化、包括大唐西市博物馆，夜间灯火璀璨，车水马龙，各种主题活动，在这里可以看到丝路的美与壮阔，可以看到盛世大唐的繁华兴盛。'
                    },{
                        type: 4,
                        text: '电话：(029)87272792'
                    },{
                        type: 4,
                        text: '地址：陕西省西安市碑林区南大街'
                    }]
                }],
                eat: [{
                    describe: '三秦大地，面食天堂',
                    info: [{
                        type: 1,
                        text: '陕西是一片神奇的土地，从上古祖先“华胥氏”“炎黄二帝”，到“夏商周”“秦汉隋唐”，都与这片土地有关。三秦大地的美食和这块古老的土地一样， 散发着迷人的气息。在漫长的历史岁月中，上到皇宫殿堂下到田间地头，诞生出一样又一样的人间美味。有臊子面，牛羊肉泡馍等，陕西传统面食。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@清汤-挂面'
                    },{
                        type: 1,
                        text: '肉夹馍是将面团煎至金黄，之后做成面膜，切开两半，里面加以上好的羊肉。馍香而脆，加以羊肉的淳厚，味道特别香脆。'
                    }]
                },{
                    describe: '面食之都，老百姓的智慧',
                    info: [{
                        type: 1,
                        text: '西安特色美食以各种面食闻名于世，自古至今在西安人民田间地头，柴米油盐的平凡日子里，面食的制作已是中华之最，每一种美味，都充满了生活气息，都接近人们对大西北生活风气的阐释。'
                    },{

                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@朝与暮'
                    },{
                        type: 1,
                        text: '臊子面是西北地区传统面食，以薄、筋、光、煎、稀、汪、酸、辣、香而著名，历史悠久。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@真z'
                    },{
                        type: 1,
                        text: '陕西提起牛羊肉泡馍妇孺皆知。当地人视为美食，久食不厌；外来游客莫不争先品尝，以饱口福。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/10.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 1,
                        text: '在山西有这样一家美食店，环境中式复古，红色木质与绿植物相呼应，穿越回古代来一次味觉享受，山南风味餐厅，口味兼顾，菜品齐全。'
                    },{
                        type: 4,
                        text: '电话：029-87618972'
                    },{
                        type: 4,
                        text: '地址：陕西省西安市碑林区西木头市51号联邦中航商务酒店1层'
                    }]
                }],
                live: [{
                    describe: '古城旁，西市边，清雅居舍',
                    info: [{
                        type: 0,
                        text: '【格林童话】进城墙/大唐西市/西大大三居'
                    },{
                        type: 1,
                        text: '推荐亮点:市中心路段，交通、购物便利，临近古城墙，西市，古城夜景一览无余，整洁干净，品质床品，设施齐备，封闭式厨房，温馨感爆棚。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/11.png')
                    },{
                        type: 1,
                        text: '夜晚的城墙，灯火通明，落地窗前，古都夜景清晰可见。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/12.png')
                    },{
                        type: 1,
                        text: '全套精选家具，北欧风格，百兆wifi、有线电视，与家人一起享受温馨的古都旅居生活。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/13.png')
                    },{
                        type: 1,
                        text: '超大落地窗，采光良好，宽敞明亮。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/14.png')
                    },{
                        type: 1,
                        text: '精选床品，柔软舒适，一夜酣睡，梦回大唐，一切尽在其中。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xian/15.png')
                    },{
                        type: 1,
                        text: '整洁干净的卫浴，生活用品一应俱全，24小时热水，实用吹风机，家中一样的便利。'
                    }]
                }]
            }, {
                value: 45,
                label: '秦岭',
                cover: require('@/assets/images/cityImg/qinling.png'),
                titleCover: require('@/assets/images/cityTitle/qinling.png'),
                describe: '陕南福地秦岭自然保护区',
                info: [{
                    type: 1,
                    text: '“云横秦岭家何在?雪拥蓝关马不前。”这句描写秦岭的诗,为世人展现出一幅唯美的秦岭风光画卷。走近秦岭,如同进入一个梦境里，河流飘着雾气，远山云雾缭绕，空谷幽静，白云深处藏人....古诗里描绘的美景在这里随处可见，身临仙境的美妙意境让人流连忘返。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/qinling/1.png')
                },{
                    type: 3,
                    text: '小红书用户@阿杰木木'
                }],
                play: [{
                    describe: '黑河国家森林公园',
                    info: [{
                        type: 1,
                        text: '园区森林茂密，奇峰若雕，怪石嶙峋，山水如画。大熊猫、金丝猴、羚牛等珍稀野生动物倘佯其间，傥骆道、营盘梁、钓鱼台、大蟒河等历史人文景观，凸现着深沉厚重的文化积淀。春之山花烂漫，夏之密林蔽日，秋之红叶满山，冬之白雪皑皑，更使游客情有千结、流连忘返。 '
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/2.png')
                    },{
                        type: 3,
                        text: '黑河国家森林公园官网'
                    },{
                        type: 1,
                        text: '钓鱼台， 相传为姜子牙在太白山上封神之后，沿黑河而下休息钓鱼之处。黑河水从钓鱼台两边流下。钓鱼台上树木参天，巨石直立，松荫漏日，为避暑纳凉的好场所。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/3.png')
                    },{
                        type: 3,
                        text: '黑河国家森林公园官网'
                    },{
                        type: 1,
                        text: '黑河，源清流洁，仿佛母亲的乳汁滋润养育着两岸勤劳善良的人们。河对面的两座山峰，形状、大小相同，酷似黑河母亲的双乳，中间有涓涓细流，恰似母亲的乳汁，融入黑河，甘甜可口，沁人心脾。'
                    },{
                        type: 4,
                        text: '电话： (029)85102008'
                    },{
                        type: 4,
                        text: '地址：西安市周至县厚畛子镇'
                    }]
                }],
                eat: [{
                    describe: '陕西特色，秦岭经典美食',
                    info: [{
                        type: 1,
                        text: '神仙凉粉又叫神仙豆腐，是陕西秦岭山区独有的风味吃食，在汉中，宝鸡的太白，凤县，神仙凉粉以浓重的口味，凉爽可口令人在炎热的夏天舒畅之极，似乎真的成了神仙。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@陕西小吃美食'
                    },{
                        type: 1,
                        text: '佛坪蒸盆子这道菜原汁原味，汤醇肉香，色香味俱佳。陕西汉中地道美食。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/5.png')
                    },{
                        type: 3,
                        text: '百度百科'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/6.png')
                    },{
                        type: 3,
                        text: '大众点评'
                    },{
                        type: 1,
                        text: '门店推荐远稻亭，菜品应有俱全，环境整洁，陕西家常菜，怎么也吃不够。'
                    },{
                        type: 4,
                        text: '电话：0916-8915959'
                    },{
                        type: 4,
                        text: '地址：汉中市佛坪县老街17号'
                    }]
                }],
                live: [{
                    describe: '熊猫环保主题民宿',
                    // qrCodeImg: require('@/assets/images/qrCodeImg/hotel_2405.png'),
                    // hotelId: '2405',
                    info: [{
                        type: 0,
                        text: '欢墅·精品民宿（万禾秦岭寓舍）',
                    },{
                        type: 1,
                        text: '推荐亮点：秦岭山脉中部，临近自然保护区，风景优美，空气清新，交通便捷，木制精装，亲近动物的温馨氛围，儿童工艺品装饰，亲子出行不二之选。',
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/7.png')
                    },{
                        type: 1,
                        text: '精品民宿，亲近自然，风景优美，大厅明亮玻璃房设计，给你不一样的感觉。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/8.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/10.png')
                    },{
                        type: 1,
                        text: '双人房、大床房，柔软精挑床品，保障你安稳睡眠。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/11.png')
                    },{
                        type: 1,
                        text: '精心布置，熊猫主题，小朋友手工工艺品装饰，温馨可爱，营造良好亲子氛围。家庭出游首选。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/qinling/12.png')
                    },{
                        type: 1,
                        text: '整洁卫浴，用品齐全，如同在家一般的便利。'
                    }]
                }]
            }]
        }, {
            value: 5,
            label: "京津冀",
            cover: require('@/assets/images/areaTitle/jingjinji.png'),
            list: [{
                value: 50,
                label: '古北水镇',
                cover: require('@/assets/images/cityImg/gubeishuizhen.png'),
                titleCover: require('@/assets/images/cityTitle/gubeishuizhen.png'),
                describe: '赴一场时光之约——<br>古北水镇',
                info: [{
                    type: 1,
                    text: '在密云郊外的古北口镇司马台村，背靠长城的山脚下，“隐藏”着一座即=既年轻，又充满时光韵味的古城小镇——古北水镇。这里青砖灰瓦、木质亭台，小桥流水，摇船游弋，宛如被遗落在时光之外的“世外桃源”。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/beijing/4.png')
                }, {
                    type: 3,
                    text: '小红书用户@蜜桃假期旅行'
                }, {
                    type: 1,
                    text: '约上三五好友，身着心爱的汉服，撑起一把油纸伞，穿游在小镇中，便可共赴一场时光之约。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/beijing/5.png')
                }, {
                    type: 3,
                    text: '小红书用户@双木嘉容'
                }],
                eat: [{
                    describe: '从小吃到大餐，<br>每一种味道都想品尝！',
                    info: [{
                        type: 1,
                        text: '古北烤红薯、烤梨、桥头糕、豆腐角、萝卜丝饼……各种特色小吃应有尽有。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/14.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/15.png')
                    }, {
                        type: 3,
                        text: '小红书用户@敦儿妈爱学习'
                    }, {
                        type: 1,
                        text: '密云香烧肉”更是一绝，都说古北水镇有三烧：烧肉、烧饼和烧酒，这一道菜就能品尝到两样。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/16.png')
                    }, {
                        type: 3,
                        text: '网络'
                    }, {
                        type: 1,
                        text: '门店则推荐位于古北水镇景区汤河古寨区内的“烧肉馆”，这里门脸儿小，但内部空间还很宽敞，服务员相当热情。而且依河临街，品尝美食的同时还能览尽古镇景色。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/17.png')
                    }, {
                        type: 3,
                        text: '烧肉馆网络'
                    }, {
                        type: 4,
                        text: '电话: 010-81009963'
                    }, {
                        type: 4,
                        text: '地址: 古北口镇司马台村古北水镇景区汤河古寨区内'
                    }]
                }],
                play: [{
                    describe: '别眨眼，欢迎来到民国小镇',
                    info: [{
                        type: 1,
                        text: '初进入小镇，浓厚的文化气息便扑面而来。你可以到司马小烧品酒，也可以去永顺染坊DIY属于自己的印染作品；还可以去英华书院，感受一下书香浓郁的氛围；更可以去镇远镖局，重温行走江湖的英勇之风……'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/6.png')
                    }, {
                        type: 3,
                        text: '杨无敌祠官方网站'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/7.png')
                    }, {
                        type: 3,
                        text: '八旗会馆官方网站'
                    }, {
                        type: 1,
                        text: '永顺染坊更是小姐姐们出片的“宝地”，走在古镇路上，远远看到黄布红字的幡旗，上面写着一个“染”字，那就是永顺染坊了，据说这个“染”还是康熙皇帝的御笔呢！'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/8.png')
                    }, {
                        type: 3,
                        text: '永顺染坊官方网站'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/9.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/10.png')
                    }, {
                        type: 3,
                        text: '小红书用户@OPPO'
                    }, {
                        type: 1,
                        text: '每年6月到9月，这里还会有星空夏季为主题的丰富活动，骑单车游长城、长城星空帐篷营、BBQ经典电影之夜……是年轻人聚会交友的“圣地”。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/11.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Borje'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/12.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/13.png')
                    }, {
                        type: 3,
                        text: '小红书用户@享·旅行定制'
                    }, {
                        type: 4,
                        text: '电话： 010-81009999'
                    }, {
                        type: 4,
                        text: '地址 : 北京市密云区古北口镇司马台村'
                    },]
                }],
                live: [{
                    describe: '住在长城脚下，<br>俯瞰水镇美景',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_27.png'),
                    hotelId: '27',
                    info: [{
                        type: 0,
                        text: '欢墅·古北长城源著度假别墅'
                    }, {
                        type: 1,
                        text: '推荐亮点：交通便利，紧邻5A景区古北水镇，司马台长城；景色优美，超大落地门窗，近距离观赏水镇夜景；服务贴心，提供私人管家早餐配送服务。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/18.png')
                    }, {
                        type: 1,
                        text: '周边紧邻风景秀丽的古北水镇旅游区。白天你可以登雄伟长城，可以在雁归码头、鸳鸯码头游船观水镇美景；夜晚可以坐缆车游司马台俯观水镇倾城灯火。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/19.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Borje'
                    }, {
                        type: 1,
                        text: '空间宽阔可以容纳多人同时入住，是家庭出游、好友相聚、轰趴团建的最优选择。管家阿姨不会随意打扰，整个空间很私密，早餐有阿姨来现做，午餐和晚餐可以自己DIY。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/20.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/21.png')
                    }, {
                        type: 3,
                        text: '网络'
                    }]
                }],
            }, {
                value: 51,
                label: '白洋淀',
                cover: require('@/assets/images/cityImg/baiyangdian.png'),
                titleCover: require('@/assets/images/cityTitle/baiyangdian.png'),
                describe: '鱼水之乡，不仅在南方',
                info: [{
                    type: 1,
                    text: '从北京到白洋淀大约200公里，高速自驾1小时左右，动车1.5小时左右即可直达，这里水产资源丰富，并以大面积的芦苇荡和千亩连片的荷花淀而闻名，因距离北京较近，是热门的京郊游胜地。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/baiyangdian/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@马宇'
                }],
                eat: [{
                    describe: '质朴的分量与价格，<br>超鲜的味道与体验',
                    info: [{
                        type: 1,
                        text: '来白洋淀一定不能不吃的就是炖鱼，汲取白洋淀的天然环境所长大的鱼,比人工养殖的味道可鲜美多了!'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/4.png')
                    }, {
                        type: 3,
                        text: '网络，中国雄安官网'
                    }, {
                        type: 1,
                        text: '门店推荐“淀里船宴”创意菜，这家餐厅菜品可口，性价比也高，楼上、船里均可用餐，不过想要坐船的话就需要排队，平时晚上排队的人也不少，一定要做好心里准备！'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/5.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Amberrrrrrrrr'
                    }, {
                        type: 4,
                        text: '电话：0312-5053333'
                    }, {
                        type: 4,
                        text: '地址：河北省保定市莲池区裕华东路573号'
                    }]
                }],
                play: [{
                    describe: '荡舟湖上，芦花美、荷花香',
                    info: [{
                        type: 1,
                        text: '这里最值得玩的景点当属白洋淀景区，每年的7月份来此，满塘荷花开放，是观赏摄影的绝佳地点。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@马宇'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/3.png')
                    }, {
                        type: 3,
                        text: '马蜂窝旅游官网'
                    }, {
                        type: 4,
                        text: '电话：0312-5116352'
                    }, {
                        type: 4,
                        text: '地址：保定市保定莲池区永华南大街688号'
                    }]
                }],
                live: [{
                    describe: '超值的价格，奢华的享受',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_66.png'),
                    hotelId: '66',
                    info: [{
                        type: 0,
                        text: '欢墅·精品度假别墅(白洋淀码头店)'
                    }, {
                        type: 1,
                        text: '推荐亮点：位置优越，步行至白洋淀码头仅需5分钟；周围景色优美，百米之内，瞭望塔，登高远眺白洋淀全景。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/7.png')
                    }, {
                        type: 1,
                        text: '装修豪华，配以斯维登专业的管家服务，更有一流的客用品，一流的管家服务，同时提供住宿、休闲娱乐、开火、旅游咨询等特色服务。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/8.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/9.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/10.png')
                    }, {
                        type: 3,
                        text: '小红书用户@马宇'
                    }]
                }, {
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_1252.png'),
                    hotelId: '1252',
                    info: [{
                        type: 0,
                        text: '欢墅·精品度假别墅(白洋淀码头鹭岛)'
                    }, {
                        type: 1,
                        text: '推荐亮点：地理位置优越，坐落于白洋淀温泉城；家庭出游首选，私人庭院享海鲜烧烤大餐；周边垂钓、温泉洗浴、农家乐等活动精彩不停。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/11.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/12.png')
                    }, {
                        type: 1,
                        text: '附近有郭里口联合饭店、十里河乡、杂鱼老店、白洋淀炝锅鱼、温泉城韩式烧烤等各色美食。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/13.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/baiyangdian/14.png')
                    }]
                }],
            }, {
                value: 52,
                label: '天津城区',
                cover: require('@/assets/images/cityImg/tianjin.png'),
                titleCover: require('@/assets/images/cityTitle/tianjin.png'),
                describe: '山河秀丽，文化名扬，<br>相声快板响四方',
                info: [{
                    type: 1,
                    text: '东临渤海，北依燕山，海河在城中蜿蜒而过，造就了天津秀丽的风景。深厚的文化底蕴在这座城市衍生出了相声、快板等艺术瑰宝，为人们的生活增添了无限的乐趣，也造就了天津人乐观的性格。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/tianjin/1.png'),
                }, {
                    type: 3,
                    text: '百度百科',
                }
                ],
                eat: [{
                    describe: '生活中的烟火气',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/3.png')
                    }, {
                        type: 1,
                        text: '天津人的乐观也体现在吃上，作为一天的开始，早餐一定要吃好，对于大部分天津人来说，最好吃的煎饼果子一定是“我家楼下那家”。寒冷的北方早晨，一笼狗不理包子，一套加鸡蛋的煎饼果子，一块冒着热气的耳朵眼儿炸糕，便开启了热闹的一天。'
                    }],
                },{
                    describe: '浪漫与美食的碰撞',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/20.png')
                    },{
                        type: 3,
                        text: '小红书用户@syhwj'
                    }, {
                        type: 1,
                        text: '天津之眼附近的夜市充满了美食的诱惑，炒凉糕、锅巴菜、三合益凉皮面皮、鸭油包等天津特色小吃在奔波的夜晚给你安慰，是无数人怀念的味道。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/21.png')
                    },{
                        type: 3,
                        text: '小红书用户@。。'
                    }, {
                        type: 1,
                        text: '如果想体验网红美食，摩天轮拼盘火锅值得一去，其创意来自天津之眼，川味锅底鲜香爽口，蘸料却可以调出天津特色，与北方人偏爱的口味相似，芝麻酱必不可少，既有让人心动的颜值，也有着诱人的味道。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/22.png')
                    },{
                        type: 3,
                        text: '小红书用户@M畅M'
                    }, {
                        type: 1,
                        text: '位于天津之眼售票处附近，就隐藏着这样一家门店——鳢lǐ·鱼鳢川味融合籽蟹火锅，环境好到超乎想象，纸片鱼和乌鳢鱼骨肉五星推荐！'
                    }, {
                        type: 4,
                        text: '电话：022-27312850'
                    }, {
                        type: 4,
                        text: '地址：天津市和平区荣安大街新秀居116号'
                    }]
                }],
                play: [{
                    describe: '传统与现代的交融',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@萌萌哒小麦芽'
                    }, {
                        type: 1,
                        text: '去一趟天津古文化街、鼓楼、解放桥感受传统文化的魅力，体会老天津人悠闲自在的本地生活；或者到天津之眼、滨海图书馆等气派的地标建筑打卡留念，这里记录了天津的成长与发展，也展现了天津繁荣的一面。'
                    }],
                }, {
                    describe: '城市繁华尽收眼底——<br>天津之眼',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@郑格儿'
                    }, {
                        type: 1,
                        text: '摩天轮，不但是各种游乐场里的人气王，还成为许多城市的地标性建筑，2008 年落成的「天津之眼」是其中最特别的一个，它矗立在天津的三岔河口永乐桥之上，是世界上唯一一座建在桥上的摩天轮。'
                    },],
                }, {
                    describe: '摩天轮与游船，<br>满足所有浪漫',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/tianjin/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Frances'
                    }, {
                        type: 1,
                        text: '沿着海河欣赏夜间的河岸风光，古典的桥梁与霓虹的灯光交相辉映，既能感受到海河的美，也能深刻的了解到天津的历史文化。坐上独一无二的水上摩天轮，与同伴一起吹着风到达摩天轮最高点，绝对是情侣打卡圣地。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/tianjin/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@天津海河游轮'
                    }, {
                        type: 1,
                        text: '游轮途经天津站码头，天津之眼，古文化街码头，解放桥等景点，你可以在船上吹着风，洗掉一身疲惫，尽情享受天津的夜晚。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/tianjin/7.png')
                    }, {
                        type: 3,
                        text: '小红书用户@缅茨沐'
                    }, {
                        type: 1,
                        text: '一步一景的海河风景线，夜晚灯光亮起璀璨华美，夜景可以与外滩媲美，让人立马感受到大城市风范。夜晚的漫步，经过一座座建筑风格不同的大桥，桥下会有老人家吹萨克斯的街头音乐，走在海河边上有种穿越回布达佩斯的错觉，多瑙河上的桥梁和两岸的布达与佩斯也就是这样，一场意料之外的夜晚漫步，值得来看。'
                    },{
                        type: 4,
                        text: '电话：022-26288830'
                    },{
                        type: 4,
                        text: '地址：天津市红桥区三岔河口永乐桥'
                    }],
                }],
                live: [{
                    describe: '想看夜晚的天津之眼有多美？就住这里！',
                    // qrCodeImg: require('@/assets/images/qrCodeImg/hotel_15405.png'),
                    // hotelId: '15405',
                    info: [{
                        type: 0,
                        text: '城宿·天津之眼（临古文化街北竹地地铁清新大两居）'
                    },{
                        type: 1,
                        text: '推荐亮点：交通便利，靠近天津之眼，紧邻地铁口近海河，简约舒适，干净整洁，采光好享受阳光温暖，带有厨房，生活用品齐全，享受家一般的温暖。',
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/tianjin/11.png')
                    }, {
                        type: 1,
                        text: '配套设备齐全，两室两床适合与朋友一起居住，房间干净，面积适中，可以游玩过后在房间聊天休息，距离景区近，减少在路上浪费时间。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/tianjin/12.png')
                    }]
                }]
            }, {
                value: 53,
                label: '秦皇岛',
                cover: require('@/assets/images/cityImg/qinhuangdao.png'),
                titleCover: require('@/assets/images/cityTitle/qinhuangdao.png'),
                describe: '比想象中还要美好的地方',
                info: [{
                    type: 1,
                    text: '秦皇岛是一座有着悠久历史的历史文化名城。两千余载的岁月长河，留下了夷齐让国、秦皇求仙、姜女寻夫、汉武巡幸、魏武挥鞭、唐宗驻跸等历史典故。',
                }, {
                    type: 2,
                    text: require('@/assets/images/city/qinhuangdao/1.png'),
                }, {
                    type: 3,
                    text: '百度百科',
                }
                ],
                eat: [{
                    describe: '来小岛吃到扶墙出吧',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/qinhuangdao/4.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qinhuangdao/5.png'),
                    }, {
                        type: 3,
                        text: '小红书用户@一只二萌呀！',
                    }, {
                        type: 1,
                        text: '龙头麻辣烫配上自制的调料，麻酱香浓，蒜泥增香解腻，唇齿间的美味令人留恋，还有太子锅，北龙牛蛙，清真烧卖等特色美食，点缀着如画的风景，深刻的留在记忆里。',
                    },{
                        type: 4,
                        text: '电话：13472997333'
                    },{
                        type: 4,
                        text: '地址：河北省秦皇岛市海港区开发区长江中道21号'
                    }]
                }],
                play: [{
                    describe: '日出日落，梦中海岛生活',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/qinhuangdao/2.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qinhuangdao/3.png'),
                    }, {
                        type: 3,
                        text: '小红书用户@傍晚路过花店',
                    }, {
                        type: 1,
                        text: '去阿那亚礼堂打卡，去西港花园拍一组好看的写真，去猫的天空之城看书，在海水浴场嬉戏，秦皇岛充满了让你意想不到的惊喜。',
                    },{
                        type: 4,
                        text: '电话：400-810-9988, 400-115-5500'
                    },{
                        type: 4,
                        text: '地址：河北省秦皇岛市昌黎县黄金海岸工业园区锦海南路7号'
                    }]
                }],
                live: [{
                    describe: '世外桃源，天然氧吧',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_2222.png'),
                    hotelId: '2222',
                    info: [{
                        type: 0,
                        text: '欢墅·度假客栈（青龙县大森店村）'
                    }, {
                        type: 1,
                        text: '推荐亮点：绿树成荫，环境优美，交通便利，快速到达景点。混砖木质结构，古朴美观，推窗即是青山蓝天，夜晚可观满天星斗。',
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qinhuangdao/6.png'),
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/qinhuangdao/7.png'),
                    }]
                }],
            }, {
                value: 54,
                label: '北京城区',
                cover: require('@/assets/images/cityImg/beijing.png'),
                titleCover: require('@/assets/images/cityTitle/beijing.png'),
                describe: '红墙白塔、绿瓦琉璃，<br>共赴一场三千年时光之旅',
                info: [{
                    type: 1,
                    text: '北京，古称燕京、北平，这里是中国首都所在，也是政治，文化、交通、科技和国际交往中心。三千年历史沉淀，北京以其独特的魅力吸引着国内外游客络绎不绝前来“一睹芳容”。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/beijing/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@阿远来了'
                }],
                eat: [{
                    describe: '皇城根儿的味蕾享受',
                    info: [{
                        type: 1,
                        text: '北京烤鸭、炸酱面、铜锅涮羊肉、炒肝儿、爆肚儿、豆汁儿、焦圈等“眼花缭乱”，总有一款美味能打动你。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@SHERORITA'
                    }]
                }],
                play: [{
                    describe: '历史与时尚激情碰撞',
                    info: [{
                        type: 1,
                        text: '故宫、天坛、颐和园、北海公园都是北京必打卡之地。而王府井、西单、朝阳大悦城等商业街区，则是汇聚潮流时尚的购物“圣地”所在。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/beijing/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Sophia Wen'
                    }]
                }],
                live: [],
            }]
        }, {
            value: 6,
            label: "福建",
            cover: require('@/assets/images/areaTitle/fujian.png'),
            list: [{
                value: 60,
                label: '武夷山',
                cover: require('@/assets/images/cityImg/wuyishan.png'),
                titleCover: require('@/assets/images/cityTitle/wuyishan.png'),
                describe: '九曲绕山情满山，<br>占尽人间美',
                info: [{
                    type: 1,
                    text: '武夷山位于福建省武夷山市南郊，是中国著名的风景旅游区和避暑胜地，属于典型的丹霞地貌，是世界文化与自然遗产地，首批国家级重点风景名胜区。武夷山通常指位于福建省武夷山市西南 15 公里的小武夷山，被称为福建第一名山，属典型的丹霞地貌，是世界文化与自然遗产地，首批国家重点风景名胜区之一。武夷山西部是全球生物多样性保护的关键地区，分布着世界同纬度带现存最完整、最典型、面积最大的中亚热带原生性森林生态系统。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/wuyishan/1.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/wuyishan/2.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/wuyishan/3.png')
                },{
                    type: 3,
                    text: '网络'
                }],
                play: [{
                    describe: '船在碧波上，人在画中游；<br>漫步山涧间，题诗白云阁。',
                    info: [{
                        type: 1,
                        text: '从世界的繁华似锦，渡入乡野； 从茶叶到民宿的点滴沉淀，再到当地文化的浸润挖掘。游武夷山，漫步于山间，细碎的步伐枕着斑驳的千年古道，亚热带森林的氧气浸润着唐宋古风的茶香，斜阳绕过凤尾竹的发梢洒在斑驳的建盏上；沿途不仅是大自然的鬼斧神工，还有武夷山独特而丰富的文化内涵：中国一批历史文化名人朱熹、陆游、辛弃疾等都先后在武夷山生活、讲学，留下了不少文化遗产。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/4.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@雪琪小仙女'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@阿雅'
                    }]
                }],
                eat: [{
                    describe: '田园炊烟起，农人采茶归',
                    info: [{
                        type: 1,
                        text: '武夷山之行，少不了品尝当地名茶“大红袍”。可是茶终究是能打包带走的，而带不走的，却是弥漫着茶香的那一顿晚餐。就着茶香，来一顿正宗的武夷山美食吧。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@旧街森活'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/8.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@武夷山一曲相思矮胡度假民宿'
                    }]
                }],
                live: [{
                    describe: '清茶谈话，散闷消愁，<br>体验山外山的洞天居所',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_16985.png'),
                    hotelId: '16985',
                    info: [{
                        type: 0,
                        text: '欢墅·精品度假别墅(武夷山山外山)'
                    },{
                        type: 1,
                        text: '推荐亮点：地处武夷山国家旅游度假区杜坝风情小镇旁,毗邻印象大红袍剧场、龙井山，茶博园，近武夷山极地海洋公园，距景区南路口、三木高铁公交枢纽仅十分钟车程，交通便利、地理位置绝佳。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/11.png')
                    },{
                        type: 1,
                        text: '门店以新中式主义为主体建筑风格， 有公寓，洋房，别墅三种不同户型，能满足不同客户群体入住需求，新中式装修风格，独立院落，简约却不简单。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/12.png')
                    },{
                        type: 1,
                        text: '室内配有茶具、入住后静静的泡上一壶茶，与三五好友闲聊，畅谈人生。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/13.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/14.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuyishan/15.png')
                    },{
                        type: 1,
                        text: '厨房可请武夷山本地厨师做饭，足不出户享受武夷山地道美食。专业的贴心管家一站式服务，体验旅途中家的感觉。'
                    }]
                }]
            }, {
                value: 61,
                label: '龙海',
                cover: require('@/assets/images/cityImg/longhai.png'),
                titleCover: require('@/assets/images/cityTitle/longhai.png'),
                describe: '漳州龙海，埭美古村——<br>不为人知的桃花源',
                info: [{
                    type: 1,
                    text: '漳州市龙海区位于福建省东南沿海，福建第二大江九龙江出海口，西与漳州主城区毗邻，东临厦门湾区。区内的埭美古村是龙海现存最大、保存最完整的古民居建筑群，它是闽系红砖建筑文化的杰出代表，屋顶多为硬山式曲线燕尾脊，红瓦屋面，石砌墙体，从上往下看异常整齐划一，是一个超过600年历史的古村落。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/longhai/1.png')
                },{
                    type: 3,
                    text: '小红书用户@wushiiyuu'
                }],
                play: [{
                    describe: '夕阳染红石墙，<br>这里的日色从来都很缓慢。',
                    info: [{
                        type: 1,
                        text: '全村四面环水，古榕遍村，古厝成群，好似一处被人遗忘的桃源。这里游客很少，日子很慢，276座房屋，连出一段闽南旧事。在村门口的大榕树下晒太阳，看夕阳把硬山燕尾脊屋顶，渐渐染红。穿梭在巷弄里，初来乍到，很容易就迷了路。尘世喧嚣，村民就在这儿，过着最朴实的生活。你千万别告诉别人，因为它，不足为外人道也。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/2.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@珈蓝视听'
                    },{
                        type: 4,
                        text: '地址：漳州市龙海市东园镇埭尾村埭美自然村'
                    }]
                }],
                eat: [{
                    describe: '穿梭巷弄，<br>体验当地风土人情',
                    info: [{
                        type: 1,
                        text: '手工麻糍、锅边糊、米苔目、秋葵茶......穿梭古村的街头巷尾，品尝独属于当地的烟火人间。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@海边老螃蟹'
                    },{
                        type: 1,
                        text: '在这里特别推荐这家阿娇手工麻糍，极具风味。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/5.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@Chili丶'
                    },{
                        type: 4,
                        text: '电话：17759765318'
                    },{
                        type: 4,
                        text: '地址：福建省漳州市龙海区埭美古村69号'
                    }]
                }],
                live: [{
                    describe: '位于漳州的“西班牙”海景房',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_66.png'),
                    hotelId: '66',
                    info: [{
                        type: 0,
                        text: '斯维登·卡达凯斯度假公寓'
                    },{
                        type: 1,
                        text: '推荐亮点：距离埭美古村仅半小时车程；位于西班牙风情小镇，极具异域风情；房间推窗见海，体验面朝大海，春暖花开；两公里私家海岸线，漫步步道，领略海浪拍石；200平米四卧洋房，浪漫泳池，可携带宠物，轰趴聚会首选。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/7.png')
                    },{
                        type: 1,
                        text: '这里还是《西虹市首富》《重返20岁》《我的奇妙男友》等无数剧组的取景地，闲时散步周边，可能随时偶遇明星~'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/8.png')
                    },{
                        type: 1,
                        text: '拥有中式、现代、田园、欧式、地中海等不同房型，内设客厅、厨房、卧室、卫生间、阳台，配备各类厨房和生活用品，设施一应俱全。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/9.png')
                    },{
                        type: 1,
                        text: '公寓环境优美静谧，设有大型免费停车场、运动场、各类休闲娱乐设施，面朝大海，拥有无敌滨海大草坪、游艇码头、婚礼教堂等。还提供自助早餐，在家宴餐厅内享用（餐厅另供各类特色美食）'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/longhai/12.png')
                    }]
                }]
            }, {
                value: 62,
                label: '厦门',
                cover: require('@/assets/images/cityImg/xiamen.png'),
                titleCover: require('@/assets/images/cityTitle/xiamen.png'),
                describe: '风姿绰约的“海上花园”',
                info: [{
                    type: 1,
                    text: '厦门别称鹭岛，是东南沿海重要的中心城市、港口及风景旅游城市。由本岛（厦门岛）、离岛鼓浪屿、西岸海沧半岛、北岸集美半岛、东岸翔安半岛、大嶝岛、小嶝岛、内陆同安、九龙江等组成。位于福建省东南端， 西界漳州， 北邻南安和晋江，东南与大小金门和大担岛隔海相望。有鼓浪屿、万石植物园、胡里山炮台、南普陀寺、曾厝垵等著名景点。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/xiamen/1.png')
                },{
                    type: 3,
                    text: '百度图片'
                },{
                    type: 2,
                    text: require('@/assets/images/city/xiamen/2.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/xiamen/3.png')
                },{
                    type: 3,
                    text: '小红书用户@梁哈哈的快乐星球'
                }],
                play: [{
                    describe: '漫步海滨，这里既有<br>最美海景，也有繁华都市',
                    info: [{
                        type: 1,
                        text: '岛、礁、岩、寺、花、木相互映衬，侨乡风情、闽台习俗、海滨美食、异国建筑融为一体，四季如春的气候更为海的魅力锦上添花。风景秀丽，气候宜人，海水环绕、沙滩广阔、阳光和煦，可以说这里是全国环境最好的城市之一。同时，作为改革开放的先行地，厦门也有其现代化的繁华一面，地标建筑双子塔彰显这一点。此外，厦门大学、华侨大学等书香之地也是这座城市独有的气质。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/4.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/5.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/6.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@一罐热茶'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@小羊の咩咩'
                    }]
                }],
                eat: [{
                    describe: '食在厦门，寻觅地道闽南味儿',
                    info: [{
                        type: 1,
                        text: '厦门属闽南，而闽南菜清鲜香脆，注重调汤估料，口味清淡，酸甜适宜，中西合璧，变化无穷，它的烹调技法多样，有炸、炒、煮、炖、焖、煎、炣、灴、淋、蒸等。与其去吃何处都有的汉堡炸鸡，不如去老城区转转，寻找地道的闽南味儿。海蛎煎、闽南叉烧、海苔春卷、香酥鸭......总有一道菜对你胃口。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@aeleen'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/12.png')
                    },{
                        type: 3,
                        text: '小红书用户@头tia困不ki'
                    }]
                }],
                live: [{
                    describe: '漫步林荫小径，<br>感受书香之气',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_729.png'),
                    hotelId: '729',
                    info: [{
                        type: 0,
                        text: '斯维登·北站华大度假公寓'
                    },{
                        type: 1,
                        text: '推荐亮点：紧邻地铁1号线市民广场站，距离鼓浪屿风景区仅半个多小时车程，距高崎国际机场仅10分钟车程；此外，公寓紧靠华侨大学与集美学村，浓浓的书香之气；紧邻市民广场、图书馆、科技馆，人文氛围浓厚。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/13.png')
                    },{
                        type: 1,
                        text: '房间温馨浪漫，全景落地窗，视野开阔。校园情人湖景尽收眼底。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/13.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/14.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/15.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/16.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/17.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/xiamen/18.png')
                    }]
                }]
            }, {
                value: 63,
                label: '漳州',
                cover: require('@/assets/images/cityImg/zhangzhou.png'),
                titleCover: require('@/assets/images/cityTitle/zhangzhou.png'),
                describe: '园林避暑，独享一隅静谧——漳州建发山',
                info: [{
                    type: 1,
                    text: '建发山位于长泰马洋溪生态旅游区，即位于福建省厦漳泉生态核心区，该区域是环厦都市圈中相当具潜力的城市度假板块。建发山外山择址承袭传统文化精髓，度假村以规划新中式别院、揽山平层，更整合“住、游、学、养”四大前瞻理念，匠心营造四大主题公园和三大休闲中心，囊括人文、生态、运动、科普教育、康养等全领域，呈现全方位、多维度的全家庭亲密梦想地。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/zhangzhou/1.png')
                },{
                    type: 3,
                    text: '小红书用户@雪欺'
                }],
                play: [{
                    describe: '以山为邻，以溪为伴，度假休憩的理想地',
                    info: [{
                        type: 1,
                        text: '如果厌倦了城市喧嚣，不如来这放松一下吧。这里不仅有优美的自然环境，更可以骑马射箭开卡丁车，而且还可以星空帐篷露营，也有乐队表演。节假日驱车前往，带给你世外桃源般的感受。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/2.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/3.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/4.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@阿雅'
                    },{
                        type: 4,
                        text: '电话 : 0591-86396666'
                    },{
                        type: 4,
                        text: '地址 : 福建省福州市永泰县汤埕村'
                    },]
                }],
                eat: [{
                    describe: '星空草地下的火锅烤肉',
                    info: [{
                        type: 1,
                        text: '度假村远离市区，推荐自带食材，餐具厨具民宿有提供，独栋提供一个烤盘以及一个火锅，足够使用。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/6.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@BeeBeeHo'
                    },{
                        type: 1,
                        text: '食材准备这块，可以提前一天在山姆超市里购买，寿喜锅，部队锅半成品，山姆的牛肉羊排品质也是很可以的，各自再带点火锅料，调料，饮料，水果，酒……很简单就可以组织起来。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/8.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@170的小敏子'
                    },{
                        type: 1,
                        text: '如果不想自己动手的话，推荐建发山附近的这家发现饭店农家菜。菜品多样，平价美味。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/16.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/17.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/18.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/19.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/20.png')
                    },{
                        type: 3,
                        text: '大众点评'
                    },{
                        type: 4,
                        text: '电话：0569-8319360'
                    },{
                        type: 4,
                        text: '地址：长泰县503县道十里村下锦洋153号'
                    }]
                }],
                live: [{
                    describe: '云烟缭绕，古树清泉，<br>这里是私享版“富村山居”',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_7660.png'),
                    hotelId: '7660',
                    info: [{
                        type: 0,
                        text: '欢墅·精品度假别墅（长泰建发山外山云麓山舍）'
                    },{
                        type: 1,
                        text: '推荐亮点：远离城市喧嚣，安心享受山间独有的月朗风清与诗情画意的田园风情。别墅门店北邻“福建第一漂”马洋溪漂流;东倚40平方公里天柱山国家森林公园“欢乐海洋大世界”全域旅游景区;南靠晨钟暮鼓、奇石揽胜的天成山文化景区。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/12.png')
                    },{
                        type: 1,
                        text: '别墅建筑风格古色古香，房间大气明亮，娱乐设施齐全。远离喧嚣的城市，抛开尘世的纷扰，还来一份宁静。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/13.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangzhou/14.png')
                    }]
                }]
            }]
        },
        {
            value: 7,
            label: "湘鄂",
            cover: require('@/assets/images/areaTitle/xiange.png'),
            list: [{
                value: 70,
                label: '长沙',
                cover: require('@/assets/images/cityImg/changsha.png'),
                titleCover: require('@/assets/images/cityTitle/changsha.png'),
                describe: '岳麓橘洲爱晚亭，<br>雨花湘江黄兴街',
                info: [{
                    type: 1,
                    text: '长沙，别称为潭州，湖南省省会，有“屈贾之乡”“潇湘洙泗”之称。长沙地处湖南省东部偏北，属亚热带季风性湿润气候，是首批国家历史文化名城，一座迷人的山水洲城，存有马王堆汉墓、铜官窑等历史遗迹。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/changsha/1.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/changsha/2.png')
                },{
                    type: 3,
                    text: '网络'
                }],
                play: [{
                    describe: '橘洲湘江的无限风光，<br>市井生活的不尽繁华',
                    info: [{
                        type: 1,
                        text: '长沙之行，玩处颇多。一提到长沙，人们就自然想到湘江和橘子洲头。湘江两岸赤壁如霞，白砂如雪，垂柳如丝，樯帆如云，构成美丽的长沙沿江风光带，是市民晨练晚游的佳境，也是游人观光小憩的好去处。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@琼袅的旅行'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@蒋半仙'
                    },{
                        type: 1,
                        text: '除此之外，还有参观千年学府岳麓书院，长沙IFS国金七楼打卡，爱晚亭赏枫叶，华谊兄弟电影小镇体验威尼斯异域风情，喜欢追星的朋友一定要去马栏山湖南广电中心，有机会偶遇明星哟......'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@琼袅的旅行'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@郑格儿'
                    }]
                }],
                eat: [{
                    describe: '吃在长沙，口舌生津',
                    info: [{
                        type: 1,
                        text: '说到长沙，自然也少不了美食。长沙美食以湘菜为主，湘菜是中国的八大菜系之一。今日长沙的特色小吃早已闻名于世：麻辣小龙虾、铁板鱿鱼、臭豆腐、酸辣粉......吃在长沙,口舌生津，“食”尚之趣，如“吃”如醉。在星城的街头巷尾，有多少传统小吃让人在等待，又有多少新潮小吃让人企望。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@郑格儿'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@INNO'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@宝藏少女_咖喱'
                    }]
                }],
                live: [{
                    describe: '交通辐射全市的最佳住宿地点',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_7336.png'),
                    hotelId: '7336',
                    info: [{
                        type: 0,
                        text: '城宿·归心'
                    },{
                        type: 1,
                        text: '推荐亮点：位于芙蓉广场站1号地铁出口，距离五一广场和黄兴步行街步行约十分钟，地铁直达长沙火车站、芙蓉广场、长沙南站、橘子洲、西湖公园、岳麓山国家风景区、天心阁、岳麓书院等各大交通枢纽及景点。交通十分便利，出行十分方便。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/10.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/11.png')
                    },{
                        type: 1,
                        text: '房子是很温馨舒适装修风格，房源是两室一厅一卫带开放式厨房的户型，大小家电配置齐全，两个独立的房间都有空调，三台空调都是采用冷暖空调，夏天不怕热，冬天不怕冷哦!'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/12.png')
                    },{
                        type: 1,
                        text: '床均采用梦百合零压床垫，可以享受非比寻常的舒适睡眠。客厅有个独立榻榻米小阳台，阳台上有个小矮桌可以办公看电视，十分愜意。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/changsha/13.png')
                    },{
                        type: 1,
                        text: '浴室配备温暖浴霸，热水器采用的是电热水器，房屋门锁采用的是电子密码门锁，一客一换非常安全。'
                    }]
                }]
            }, {
                value: 71,
                label: '张家界',
                cover: require('@/assets/images/cityImg/zhangjiajie.png'),
                titleCover: require('@/assets/images/cityTitle/zhangjiajie.png'),
                describe: '三千奇峰，<br>八百秀水——张家界',
                info: [{
                    type: 1,
                    text: '张家界是湖南省辖地级市，原名大庸市，位于湖南西北部，澧水中上游，属武陵山区腹地。张家界因旅游建市，是中国最重要的旅游城市之一，是湘鄂渝黔革命根据地的发源地和中心区域，是中国第一个国家森林公园。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/zhangjiajie/1.png')
                },{
                    type: 3,
                    text: '百度图片'
                }],
                play: [{
                    describe: '五步称奇，七步叫绝；<br>百龙电梯，一步登天',
                    info: [{
                        type: 1,
                        text: '乘坐百龙电梯登上顶端，眺望这些巍峨险峻的山峰。一朵朵白云和雾气从脚下的山间飘过，身旁是一棵棵参天古树，那会是一种非常特别的感受。因为张家界山上的雾气有时候会特别大，这时会阻碍对远处山峰的观赏。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/2.png')
                    },{
                        type: 3,
                        text: '百度图片'
                    },{
                        type: 1,
                        text: '但行走于这种雾气腾腾的山中，又会有一种身临仙界的梦幻感觉。此外，张家界的猴子很多，也可体验一番喂猴的乐趣，只是千万小心喂猴不成反被猴子抢了吃食。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/3.png')
                    },{
                        type: 3,
                        text: '百度图片'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@佩玲zzzpl'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@Sweet'
                    },{
                        type: 4,
                        text: '电话：0744-5712189'
                    },{
                        type: 4,
                        text: '地址：湖南省张家界市武陵源区金鞭路279号'
                    }]
                }],
                eat: [{
                    describe: '一顿吃遍张家界',
                    info: [{
                        type: 1,
                        text: '张家界觅食可不要错过这家非遗民俗美食体验地：印象·鲵宴。坐落于张家界溪步老街入口处，它是张家界餐饮新地标，也是民族建筑文化的缩影。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@娇蛋'
                    },{
                        type: 1,
                        text: '鲵鱼的肉质细腻、鲜美，风味独特；三下锅由腊肉、萝卜、豆腐为主要材料，腊肉是烟熏味的，味道比较香咸特下饭，总体味道爽口；鲵鱼灌汤包的味道跟罐头小笼包口感相似，鲵鱼的加入使汤汁更加鲜香美味，吸完汤汁在吃包子，汤包皮薄馅足。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/7.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@娇蛋'
                    },{
                        type: 1,
                        text: '娃娃鱼酥的皮非常的酥，跟苏式糕点差不多，口感层次分明，里面的馅还是挺特别的，料也挺足，值得尝试。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/10.png')
                    },{
                        type: 3,
                        text: '小红书用户@娇蛋'
                    },{
                        type: 4,
                        text: '电话：15211066721'
                    },{
                        type: 4,
                        text: '地址：湖南省张家界市武陵源区天子街宝峰桥头溪布街入口118号'
                    }]
                }],
                live: [{
                    describe: '邂逅张家界的山清水秀',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_514.png'),
                    hotelId: '514',
                    info: [{
                        type: 0,
                        text: '斯维登·家蜓酒店公寓(张家界泊富广场)'
                    },{
                        type: 1,
                        text: '推荐亮点：位于张家界，在5A级景区天门山，澧水河附近，山清水秀。酒店整体建筑群里采用现代简约与湘西地方民族特色元素相结合的立面风格，深度考虑文化与休闲融合等因素进行设计。旁边就是新华书店，中商广场，潇湘电影院等。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/12.png')
                    },{
                        type: 1,
                        text: '门店配有行政单间，行政双床，商务双床房，观景大床房，观景双床房，能够满足不同客户群体的居住体验需求。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/13.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhangjiajie/14.png')
                    },]
                }]
            }, {
                value: 72,
                label: '武汉',
                cover: require('@/assets/images/cityImg/wuhan.png'),
                titleCover: require('@/assets/images/cityTitle/wuhan.png'),
                describe: '荆楚大地，英雄之城',
                info: [{
                    type: 1,
                    text: '“武汉应略如纽约、伦敦之大”是孙中山先生对这座城市的评价，2020年一场疫情，更是让全世界看到了武汉的英雄精神。作为首批中国优秀旅游城市，这里有悠久的历史文化和壮美的自然风光，长江最长的支流汉水穿城而过，形成了武昌、汉口、汉阳三镇鼎立的格局，樱花这座城市靓丽的标签之一，每年春、秋，吸引无数游客前来。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/wuhan/1.png')
                },{
                    type: 3,
                    text: '百度百科'
                },{
                    type: 2,
                    text: require('@/assets/images/city/wuhan/2.png')
                },{
                    type: 3,
                    text: '小红书用户@哈哈'
                }],
                play: [{
                    describe: '历史与现代交融，<br>不可错过的古今美景',
                    info: [{
                        type: 1,
                        text: '武汉著名景点颇多例如东湖、黄鹤楼、木兰天池、汉口租界、归元寺、欢乐谷、汉口江滩等，既有都市风趣，又有千年文化底蕴，夜色之下，活色生香，蓬勃生长也兼收并蓄，鲜衣怒马裹挟市井烟火。高楼之下，繁华深处，仍有许多古朴、传统、简单的人文景观。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@CatherineL'
                    },{
                        type: 1,
                        text: '两大必去的景点，黄鹤楼历经千年风雨，一直就矗立在武昌蛇山之上，夜上黄鹤楼，极目远眺，沉浸在历史的光影里；武汉长江大桥更是这座城市的地标，巍然挺立大江之上是天降的彩虹，是飞舞的巨龙，是崛起的丰碑，是久盼的图腾！'
                    }]
                },{
                    describe: '遛娃圣地，家庭休闲娱乐<br>的乐园——武汉园博园',
                    info: [{
                        type: 1,
                        text: '武汉园博园是第十届中国国际园林博览会的举办地，分为南、北两大区域，总面积为213.77公顷，相当于8个北京中山公园那么大。第十届园博会成功举办后，武汉园博园作为城市公园永久保留，市民不用出武汉，就能轻松欣赏全国各地的园林之美，是休闲散心的好去处。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/6.png')
                    },{
                        type: 3,
                        text: '小红书用户@棒糖还我'
                    },{
                        type: 1,
                        text: '武汉园博会共有117个展园，其中北京园、上海园、澳门园等15个展园是必游之地，大江南北，各具特色，令人印象深刻。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/7.png')
                    },{
                        type: 3,
                        text: '小红书用户@是吴小黑呀'
                    },{
                        type: 1,
                        text: '北京园，彰显皇家园林气派一园就可领略天坛、颐和园、故宫的精华美景。汉水京园”是园区最高点，墙上的壁画犹如将小人书搬上了墙，三国纷争、赤壁之战、竹林七贤等历史故事，配合木雕，色彩艳丽、做工精细。看惯了小桥流水人家，一起欣赏下琉璃翠瓦，红墙白塔的美吧。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/8.png')
                    },{
                        type: 3,
                        text: '小红书用户@heennsssy'
                    },{
                        type: 1,
                        text: '葡式风情屋，都是地中海式风格。圣保罗教堂的遗迹、妈阁庙、圣保禄炮台、卢家大屋、安多尼旧堂、岗顶剧院，感受澳门的历史和魅力，艺术与历史的交融。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/9.png')
                    },{
                        type: 3,
                        text: '小红书用户@棒糖还我'
                    },{
                        type: 1,
                        text: '武汉自然博物馆位于武汉园博园，北靠荆山，南面楚水，填补了武汉地区没有自然博物馆的空白。来一场大河之旅， 聆听生命之歌。带上你的娃，在这里看到，听到，感知到，你所不知道的长江。'
                    },{
                        type: 4,
                        text: '电话：(027)65027332'
                    },{
                        type: 4,
                        text: '地址：武汉市硚口区金南二路'
                    }]
                }],
                eat: [{
                    describe: '早吃户部巷，晚吃吉庆街，<br>大武汉的美食尝不尽',
                    info: [{
                        type: 1,
                        text: '热干面已经是武汉的代名词，过早文化之下，早起一碗热干面才能点燃武汉人一天的精气神。四季美汤包、武汉鸭脖、什锦豆腐脑、排骨莲藕汤、黄陂三鲜等美食道道精彩，来“江城”内，感受“老武汉”的快乐。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/4.png')
                    },{
                        type: 3,
                        text: '小红书用户@可多美食记'
                    },{
                        type: 1,
                        text: '黄鹤楼下，尽享美食，与古人一同举杯畅饮。黄鹤楼边，长江大桥旁，藏在户部巷最地道的湖北菜，是武汉人不吝啬给游客品尝的骄傲。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/5.png')
                    },{
                        type: 3,
                        text: '小红书用户@爱吃的樱桃皮卡丘'
                    }]
                },{
                    describe: '百园之园中的美食天堂——汉口里',
                    info: [{
                        type: 1,
                        text: '要用嘴来了解大武汉，不得不来汉口里。位于园博园东门的汉口里是老汉口历史最悠久、内涵最丰富、与社会生活关系最密切的街道。其中地道武汉美食更是数不胜数，清蒸武昌鱼、莲藕排骨汤、大蒜腊肉炒豆丝、桂花糊米酒等美食吸引成千上万的游客去一饱口福。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/10.png')
                    },{
                        type: 3,
                        text: '小红书用户@西西李'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/11.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/12.png')
                    },{
                        type: 3,
                        text: '携程旅行'
                    },{
                        type: 1,
                        text: '门店推荐武汉名街中的文化名店——楚鱼王，这家店东坡肉，清蒸雪水鱼，养生三宝等美味佳肴不容错过，颠覆你对鱼的认知。野生大白刁，肉质鲜嫩，非常清爽。'
                    },{
                        type: 4,
                        text: '电话：(027)83599779'
                    },{
                        type: 4,
                        text: '地址：武汉市硚口区武汉园博园东路9号'
                    }]
                }],
                live: [{
                    describe: '园博园外，一览都市夜景',
                    info: [{
                        type: 0,
                        text: '【虚度·暖阳】舒适城宿'
                    },{
                        type: 1,
                        text: '推荐亮点：交通便利，旁边是壹方购物中心和武汉天地，只有想不到，没有买不到，一小时之内可到达多个打卡圣地，解放公园，武汉园博园，汉口江滩步行即可到达。夜晚可一览武汉城市夜景，室内整洁干净，设备齐全，舒适宜人。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/13.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/14.png')
                    },{
                        type: 1,
                        text: '室内简单大气，设备一应俱全，方便使用，高清投影仪大屏享受。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/15.png')
                    },{
                        type: 1,
                        text: '精致的家具，精心的摆设，合适的色调搭配，这样的装潢怎能不爱？'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/wuhan/16.png')
                    }]
                }]
            }
            // , {
            //     value: 73,
            //     label: '咸宁',
            //     cover: require('@/assets/images/cityImg/xianning.png'),
            //     titleCover: require('@/assets/images/cityTitle/xianning.png'),
            // }
            ]
        },
        {
            value: 8,
            label: "珠三角",
            cover: require('@/assets/images/areaTitle/zhusanjiao.png'),
            list: [{
                value: 80,
                label: '三亚亚龙湾',
                cover: require('@/assets/images/cityImg/yalongwan.png'),
                titleCover: require('@/assets/images/cityTitle/yalongwan.png'),
                describe: '来一场热带雨林的探险<br>——亚龙湾热带天堂',
                info: [{
                    type: 1,
                    text: '亚龙湾热带天堂森林公园是三亚的天然大氧吧，拥有中国南端较完整的热带雨林生态资源，电影《非诚勿扰》曾在此取景，被誉为“天下第一湾”。有玻璃栈桥、峭壁天池、烟波亭、龙行天下等著名景点，在这里可以尽情放松自己，拍出大片质感美照。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/yalongwan/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@南希旅记'
                }],
                play: [{
                    describe: '拍照圣地，购物天堂',
                    info: [{
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/2.png')
                    }, {
                        type: 1,
                        text: '《非诚勿扰》经典镜头过江龙索桥，是海南目前跨度最长，离地最高的铁索桥，出片率极高，叫上爱拍照的小伙伴，拍出高质量舒淇同款吧。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@华丽丽Lisa'
                    }, {
                        type: 1,
                        text: '玻璃栈道全程经过凌空台，彩虹之路，心心相印等，在上面可以欣赏亚龙湾全景，蓝天白云、依山傍水。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@cherrie'
                    }, {
                        type: 1,
                        text: '对于购物爱好者来讲三亚更是购物天堂，奥特莱斯无论是衣服还是包包，种类多款式全，且价格更为优惠，无需代购也能低价折扣买到大牌。'
                    }, {
                        type: 4,
                        text: '电话：0898-88568899'
                    }, {
                        type: 4,
                        text: '地址：海南省三亚市吉阳区龙塘路'
                    }]
                }],
                eat: [{
                    describe: '海鲜爱好者天堂，<br>新鲜尽在掌握',
                    info: [{
                        type: 1,
                        text: '海鲜平价好吃，做法多样，现捞现称的海鲜个大新鲜，满足你吃海鲜吃到撑的愿望，吃完饭去奥特莱斯购物简直不要太快乐。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Bee酱在吗'
                    }, {
                        type: 1,
                        text: '奥特莱斯的四川小胡子海鲜加工味道鲜美，是开了23年的老字号，本地人都推荐。'
                    }, {
                        type: 4,
                        text: '电话：15109887031'
                    }, {
                        type: 4,
                        text: '地址：海南省三亚市天涯区新民街122号'
                    }]
                }],
                live: [{
                    describe: '打卡天下第一湾，<br>来一场养身惬意之旅',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_104.png'),
                    hotelId: '104',
                    info: [{
                        type: 0,
                        text: '欢墅·亚龙湾精品度假别墅'
                    }, {
                        type: 1,
                        text: '推荐亮点：配备私人循环泳池及私家花园，婚纱旅拍机构优选别墅，可提供五星大厨上门烹饪服务，交通便利，靠近海滨沙滩与《非诚勿扰》拍摄地，距离海鲜市场仅十五分钟车程。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/6.png')
                    }, {
                        type: 1,
                        text: '自带花园环境优美，绿荫环绕，在旅游中仍然享受高品质生活，饭后散心，开派对都是不错的选择。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/7.png')
                    }, {
                        type: 1,
                        text: '独栋别墅设计，减少了噪音的烦恼，在这里可以享受宾至如归的服务。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/yalongwan/8.png')
                    }, {
                        type: 1,
                        text: '私人游泳池干净舒适，可以尽情在水中嬉戏，拍几组照片必定是朋友圈中亮眼的存在。'
                    }]
                }]
            }, {
                value: 81,
                label: '海口澄迈',
                cover: require('@/assets/images/cityImg/haikouchengmai.png'),
                titleCover: require('@/assets/images/cityTitle/chengmai.png'),
                describe: '火烈鸟和羊驼的领地',
                info: [{
                    type: 1,
                    text: '澄迈以优美的景观、温润的气候、特色的富硒美食悠久的历史人文，古老的火山岩古村落群备受世人瞩目。这个有着神秘气息的小城，罗驿古村、效古村、金山寺等风情小镇，吸引着一批又一批的人前来探索。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/chengmai/7.png')
                },{
                    type: 3,
                    text: '小红书用户@小胡子旅行笔记'
                }],
                play: [{
                    describe: '得天独厚的湿地——<br>红树湾湿地保护公园',
                    info: [{
                       type: 2,
                       text: require('@/assets/images/city/chengmai/1.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengmai/2.png')
                    },{
                        type: 3,
                        text: '小红书用户@well'
                    },{
                        type: 1,
                        text: '公园内不仅可以在栈道漫步呼吸负氧离子丰富的空气，还可以欣赏公园内上百只火烈鸟，可以近距离与火烈鸟互动拍照。'
                    },{
                        type: 4,
                        text: '电话：0898-36506688'
                    },{
                        type: 4,
                        text: '地址：海南省澄迈县西线高速573公里三林立交口处'
                    }]
                }],
                eat: [{
                    describe: '便宜大碗的老城味道',
                    info: [{
                        type: 1,
                        text: '原味椰奶清补凉、芒果肠粉、盐焗鸡等特色美食都是绝绝子，而且价格相当公道。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengmai/3.png')
                    },{
                        type: 3,
                        text: '小红书用户@秦楚妃'
                    },{
                        type: 4,
                        text: '电话：13322030862'
                    },{
                        type: 4,
                        text: '地址：海南省澄迈县大丰镇富力红树湾'
                    }]
                }],
                live: [{
                    describe: '置身山水，心旷神怡',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_547.png'),
                    hotelId: '547',
                    info: [{
                        type: 0,
                        text: '欢墅·精品度假别墅（澄迈红树湾）'
                    },{
                        type: 1,
                        text: '推荐亮点:全新装修，360度超大草坪庭院，提供私人管家服务，配套4万平方米大型健步公园，海南省唯一18洞高尔夫球场，位于红树湾湿地保护公园旁，依湾而建，让你仿佛置身山水。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengmai/4.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengmai/5.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/chengmai/6.png')
                    }]
                }],
            }, {
                value: 82,
                label: '珠海',
                cover: require('@/assets/images/cityImg/zhuhai.png'),
                titleCover: require('@/assets/images/cityTitle/zhuhai.png'),
                describe: '珠三角的“浪漫之城”',
                info: [{
                    type: 1,
                    text: '珠海是珠江口西岸核心城市，粤港澳大湾区重要节点；与香港深圳隔海相望，接壤澳门，是中国最早设立的经济特区之一，以全国唯一以整体城市景观入选“全国旅游胜地四十佳”的城市。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/zhuhai/1.png')
                }, {
                    type: 2,
                    text: require('@/assets/images/city/zhuhai/2.png')
                }, {
                    type: 3,
                    text: '小红书用户@桑'
                }],
                play: [{
                    describe: '浪漫唯美、直击心灵',
                    info: [{
                        type: 1,
                        text: '这里有中国唯一一座海岛上的歌剧院—日月贝歌剧院，有夜晚明亮壮阔的灯塔，还有隔海眺望的珠海渔女像，更有瑰丽盛大的海洋王国等着你来探索！'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/3.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/4.png')
                    }, {
                        type: 3,
                        text: '小红书用户@树遇民宿'
                    }],
                }, {
                    describe: '与海洋精灵的浪漫约会',
                    info: [{
                        type: 1,
                        text: '瑰丽奇妙的海洋世界—珠海长隆海洋王国,带上你的小伙伴，准备好去揭开它的神秘面纱了吗？如果你喜欢刺激，那么鹦鹉过山车不容错过。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/6.png')
                    }, {
                        type: 1,
                        text: '动物馆里的鲸鲨能够让你静距离感叹造物主的神妙；还有动物表演剧场绝对能够抓住你的眼球……'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/7.png')
                    }, {
                        type: 3,
                        text: '小红书用户@想喝可乐'
                    }, {
                        type: 1,
                        text: '这里还有呆萌可爱的企鹅，憨厚可爱的海象，似梦似幻的七彩水母，5D动物城堡影院……'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/8.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/9.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Katrina、'
                    }, {
                        type: 1,
                        text: '除了各种趣味刺激的游乐项目和海洋动物观赏之外，这里还有壮观盛大的大型表演秀，烟花秀。（PS:下载长隆旅行APP可查当天演出时间）'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/10.png')
                    }, {
                        type: 3,
                        text: '小红书用户@想喝可乐'
                    }, {
                        type: 4,
                        text: '电话：4008830083'
                    }, {
                        type: 4,
                        text: '地址：广东省珠海市香洲区富祥湾长隆度假区内'
                    }]
                }],
                eat: [{
                    describe: '广东人的茶餐厅',
                    info: [{
                        type: 1,
                        text: '冻奶茶、捞丁、西多士、混酱猪肠粉、猪仔包、咖喱扒鸡饭各色甜点美食尽在最最最地道的珠海茶餐厅里，是你感受广东人的味蕾的最佳去处。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@六壹'
                    }],
                }, {
                    describe: '湾仔海鲜街，<br>想吃你就来',
                    info: [{
                        type: 1,
                        text: '离长隆海洋王国不远的海鲜一条街——湾仔海鲜街，从海鲜市场到加工酒楼一应俱全；手臂粗的皮皮虾、活色鲜香的鲍鱼，个顶个大的生蚝……'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/11.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Le'
                    },{
                        type: 1,
                        text: '在品尝完茶餐厅的美食之后，来这儿换换口味也是一个不错的选择哦。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/12.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Yukiko'
                    },{
                        type: 1,
                        text: '海鲜加工门店的话推荐海仪美食楼，物美价廉，好吃不贵。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/13.png')
                    }, {
                        type: 3,
                        text: '小红书用户@瘦瘦'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/14.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Wensly'
                    }, {
                        type: 4,
                        text: '电话：0756-8826667'
                    }, {
                        type: 4,
                        text: '地址：广东省珠海市香洲区湾仔海鲜街11号'
                    }],
                }],
                live: [{
                    describe: '在金融中心俯瞰璀璨夜景',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_14431.png'),
                    hotelId: '14431',
                    info: [{
                        type: 0,
                        text: '珠海斯维登精品公寓（三一南方总部大厦）'
                    },{
                        type: 1,
                        text: '推荐亮点：门店位于珠海市香洲区横琴口岸，距离珠海长隆海洋王国驾车12分钟，轻奢的设计风格给人带来轻松、自由、舒适的居家体验。并提供行李寄存服务、叫醒服务，给客户带来更加贴心优质的服务感觉。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/15.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/16.png')
                    },{
                        type: 1,
                        text: '高层河景房/城景房可以一览小镇璀璨夜景，同时地理位置优越，周边有铁建广场、国际商务中心可供消遣散心。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/zhuhai/17.png')
                    }]
                }]
            }, {
                value: 83,
                label: '惠州',
                cover: require('@/assets/images/cityImg/huizhou.png'),
                titleCover: require('@/assets/images/cityTitle/huizhou.png'),
                describe: '岭南名郡、粤东门户',
                info: [{
                    type: 1,
                    text: '从珠海到惠州全程两百公里不到，自驾两小时可达。作为国家历史文化名城，惠州在隋唐已是“粤东重镇”；同时也是客家人最重要聚居地和集散地，旅居海外华人华侨、港澳台民众居客家四州之首，被称为客家侨都。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/huizhou/1.png')
                }, {
                    type: 2,
                    text: require('@/assets/images/city/huizhou/2.png')
                },{
                    type: 3,
                    text: '小红书@古琴小屋'
                }],
                play: [{
                    describe: '九铭屿海，海湾风情',
                    info: [{
                        type: 1,
                        text: '九铭屿海别称惠州“小镰仓”，斑马线的对面就是大海；拍照的话超级无敌出片，特色UFO泳池，还能在海湾边欣赏日落美景。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/3.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/4.png')
                    },{
                        type: 3,
                        text: '小红书@DS'
                    },{
                        type: 4,
                        text: '电话：（无）'
                    },{
                        type: 4,
                        text: '地址：广东省惠州市惠东县巽寮镇粘坑中段'
                    }]
                }],
                eat: [{
                    describe: '海湾边的特色美食',
                    info: [{
                        type: 1,
                        text: '海湾边当然要吃海鲜啦，除开随处可见的大排档里有各种好看又好吃的海鲜之外，还有极具特色的海上鱼排餐厅等你光顾哦。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/5.png')
                    },{
                        type: 3,
                        text: '小红书@Cindy'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/6.png')
                    },{
                        type: 3,
                        text: '小红书@cheny'
                    },{
                        type: 1,
                        text: '门店推荐领鲜一家，海景绝美，一边品尝美食一边欣赏海景，想想就忍不住心动呢。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/7.png')
                    },{
                        type: 3,
                        text: '小红书@卢狗子'
                    },{
                        type: 4,
                        text: '电话：15018095474'
                    },{
                        type: 4,
                        text: '地址：广东省惠州市惠东县210县道沙咀尾规划区162号'
                    }]
                }],
                live: [{
                    describe: '住大海岸边，<br>尊享无敌海景',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_200.png'),
                    hotelId: '200',
                    info: [{
                        type: 0,
                        text: '斯维登·中航元屿海度假公寓'
                    },{
                        type: 1,
                        text: '推荐亮点： 门店位于巽寮湾度假区，经过地下通道就是海边，巽寮湾是继全球八大湾区后又一个湾区，是整个中国最洁净优质的海湾之一，无敌海景就在此刻尊享。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/8.png')
                    },{
                        type: 1,
                        text: '公寓设施齐全，房间宽敞明亮，更有无敌海景房等你入住。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/9.png')
                    },{
                        type: 1,
                        text: '周边也毗邻多家游玩胜地，帆船中心、天后宫妈祖庙、三角洲岛以及海滨温泉等等，吃喝玩乐一应俱全。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/huizhou/10.png')
                    }]
                }]
            }, {
                value: 84,
                label: '广州',
                cover: require('@/assets/images/cityImg/guangzhou.png'),
                titleCover: require('@/assets/images/cityTitle/guangzhou.png'),
                describe: '世界一线城市，<br>“一带一路”枢纽',
                info: [{
                    type: 1,
                    text: '广州位于珠江下游、濒临南海，中国通往世界的南大门；华南地区的政治经济文化中心，也是历经沧桑磨难2000多年依旧长盛不衰的中华大港；见证了无数的人文历史，被其独特文化魅力吸引的游人络绎不绝。'
                },{
                    type: 2,
                    text: require('@/assets/images/city/guangzhou/1.png')
                },{
                    type: 2,
                    text: require('@/assets/images/city/guangzhou/2.png')
                },{
                    type: 3,
                    text: '百度百科'
                }],
                play: [{
                    describe: '古朴与潮流的完美交融',
                    info: [{
                        type: 1,
                        text: '“羊城八景”越秀公园、五仙古观、陈家祠等等无一不透露着古朴庄严，广州塔、圣心大教堂、跨江大桥、跨海大桥又迸发着现代的青春活泼。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/3.png')
                    },{
                        type: 3,
                        text: '小红书@番茄炒蛋七分蛋'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/4.png')
                    },{
                        type: 3,
                        text: '小红书@超级Lynn'
                    }]
                }
                ,{
                    describe: '广州地标建筑，<br>打卡必去之处',
                    info: [{
                        type: 1,
                        text: '广州塔的娱乐项目有高空横向摩天轮、阿尔法探索乐园、垂直速降极限项目“极速云霄”以及空中电影城。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/12.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 1,
                        text: '除外还有很多其它景点，比如488摄影观景平台、白云/星光观光大厅、科普游览厅、天梯等，大部分都是以观景摄影为主。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/13.png')
                    },{
                        type: 3,
                        text: '网络'
                    },{
                        type: 1,
                        text: '广州塔的夜景更是不必多说；还与珠江新城隔江相望，如果在塔上看够了广州城的夜景，跨过珠江来这里吃喝购物也是一个不错的选择哦。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/14.png')
                    },{
                        type: 3,
                        text: '小红书@一林Lizzem'
                    },{
                        type: 4,
                        text: '电话：020-893382222'
                    },{
                        type: 4,
                        text: '地址：广东省广州市海珠区阅江西路222号'
                    }]
                }],
                eat: [{
                    describe: '八大菜系之“粤”',
                    info: [{
                        type: 1,
                        text: '品尝八大菜系之一的粤菜，找一家百年老店，菜单就能让你看得眼花缭乱；大虾饺QQ弹弹，一口酥豆腐外脆里嫩，蒸凤爪软烂脱骨，还有糯米鸡、红米肠、蒸排骨……我已经在流口水了，你呢？'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/5.png')
                    },{
                        type: 3,
                        text: '小红书@六味芋头蛋糕'
                    }]
                },{
                    describe: '欲罢不能的美食狂潮',
                    info: [{
                        type: 1,
                        text: '玩累了当然要吃点东西补充体力，除了正宗潮汕牛肉火锅、耳熟能详的广东煲仔饭、叉烧包以及茶点等地道粤菜，还汇集有日、韩、泰国、越南以及西方各国菜色，总有一道是你的菜。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/15.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/16.png')
                    },{
                        type: 3,
                        text: '小红书@钱德'
                    },{
                        type: 1,
                        text: '好吃的门店有很多，这里推荐一家正宗老牌粤菜馆，菜品丰富，味道一绝——点嘟德粤菜馆，顺便说一句，金莎海虾红米肠进店必点哦。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/17.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/18.png')
                    },{
                        type: 3,
                        text: '小红书@WULI'
                    },{
                        type: 4,
                        text: '电话：020-89111281'
                    },{
                        type: 4,
                        text: '地址：广东省广州市海珠区逸景路238号海珠万达广场五楼'
                    }]
                }],
                live: [{
                    describe: '码头边的酒店公寓',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_172.png'),
                    hotelId: '172',
                    info: [{
                        type: 0,
                        text: '广州斯维登服务公寓(洛溪地铁站渔人码头)'
                    },{
                        type: 1,
                        text: '推荐亮点：门店位于番禺区洛溪新城北环路，步行可至兰桂坊酒吧、地铁2号线洛溪站A出口，4个地铁站可快速抵达广州南站，交通便利。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/8.png')
                    },{
                        type: 1,
                        text: '干净整洁的房间配置，多样房型可供选择，前台服务贴心周到；白天游玩一天归来，傍晚倚着码头喝一杯小酒看船来船往、暮色将至，岂不是人生的又一大快事。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/9.png')
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/10.png')
                    },{
                        type: 1,
                        text: '门店还临近香江野生动物园、鳄鱼公园、长隆欢乐世界等多个著名国家级旅游景点，是旅游度假入住的绝佳选择。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/guangzhou/11.png')
                    }]
                }]
            }]
        },
        {
            value: 9,
            label: "山东",
            cover: require('@/assets/images/areaTitle/shandong.png'),
            list: [
                //     {
                //     value: 90,
                //     label: '青岛藏马山',
                //     cover: require('@/assets/images/cityImg/qingdao.png'),
                //     titleCover: require('@/assets/images/cityTitle/zangmashan.png'),
                //     describe: '四季常青、东方瑞士',
                //     info: [{
                //         type: 1,
                //         text: '青岛，国家历史文化名城，因树木繁多、四季常青而得名。“世界啤酒之城”、“亚洲最佳航海城”、“全国文明城市”等等荣誉光环加诸一身；更是因为异域建筑种类繁多被称为“万国建筑博览会”。还等什么，快来一探究竟吧！'
                //     }, {
                //         type: 2,
                //         text: require('@/assets/images/city/zangmashan/1.png')
                //     }, {
                //         type: 2,
                //         text: require('@/assets/images/city/zangmashan/2.png')
                //     }, {
                //         type: 3,
                //         text: '小红书@一罐热茶'
                //     }],
                //     play: [{
                //         describe: '临国际港口，赏异域风情',
                //         info: [{
                //             type: 1,
                //             text: '青岛有着“中国最美城区称号”的八大关建筑群，五四纪念广场、崂山、栈桥、异国教堂、海中小岛玩转不停，更有国家级高新区红岛经济区带你感受一线城市的发展魅力。'
                //         }, {
                //             type: 2,
                //             text: require('@/assets/images/city/zangmashan/3.png')
                //         }, {
                //             type: 2,
                //             text: require('@/assets/images/city/zangmashan/4.png')
                //         }, {
                //             type: 3,
                //             text: '小红书@Hi寄存-行李寄存预订'
                //         }]
                //     }],
                //     eat: [{
                //         describe: '海鲜大餐、天然种植水果',
                //         info: [{
                //             type: 1,
                //             text: '青岛身为国际大港口，各种海鲜能让你吃到眼花缭乱，香辣蟹虾、腌钉螺、油泼扇贝、泡椒鱼皮、生蚝、蛤蜊再配上一扎青岛啤酒，再配上一盘老板送的应季水果，一个字：绝！'
                //         }, {
                //             type: 2,
                //             text: require('@/assets/images/city/zangmashan/5.png')
                //         }, {
                //             type: 3,
                //             text: '小红书@Mercury97'
                //         }]
                //     }]
                // }
                {
                    value: 90,
                    label: '青岛藏马山',
                    cover: require('@/assets/images/cityImg/qingdao.png'),
                    titleCover: require('@/assets/images/cityTitle/zangmashan.png'),
                    describe: '山花烂漫、林荫交错的<br>山间乐园——藏马山',
                    info: [{
                        type: 1,
                        text: '藏马山旅游度假区坐落于青岛黄岛区（西海岸经济新区），山峰重峦叠嶂，生态植被丰茂，加之气候宜人，素有“东有崂山，西有藏马”一说。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zangmashan/6.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/zangmashan/7.png')
                    }, {
                        type: 3,
                        text: '小红书@哟哟鹿鸣'
                    }, {
                        type: 1,
                        text: '牵着小伙伴的手一起漫步在这蔚蓝天空下的花海中，感受一下何为“万花丛中过，片叶不沾身”。'
                    }],
                    play: [{
                        describe: '目不暇接的梦幻乐园',
                        info: [{
                            type: 1,
                            text: '你可以在阿朵千禧谷里赏遍四季花海、畅玩冰雪天地；也可以在藏马山诗经-动植物园里用心感受国粹与自然之美；当然如果你想体验一把马背上的风采，也可以去藏马山河畔河道策马奔腾……'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/8.png')
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/9.png')
                        }, {
                            type: 3,
                            text: '小红书@九亿少女韩憨憨'
                        }, {
                            type: 1,
                            text: '天色渐暗，一天玩累了的你拖着疲惫的身躯再去藏马山丹溪温泉舒舒服服地泡一下，一天的疲惫瞬间就不翼而飞。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/10.png')
                        }, {
                            type: 3,
                            text: '小红书@方大大大大竹'
                        }, {
                            type: 4,
                            text: '电话：0532-84168111'
                        }, {
                            type: 4,
                            text: '地址：山东省青岛市黄岛区藏南镇'
                        }]
                    }],
                    eat: [{
                        describe: '水果采摘体验，<br>吃遍民宿风情',
                        info: [{
                            type: 1,
                            text: '提到藏马山就不得不提到这里种植的天然水果，有日本香野草莓、车厘子都是现摘现吃，甘甜饱满，让人体会一把“自食其果”的感觉。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/11.png')
                        }, {
                            type: 3,
                            text: '小红书@都有啥'
                        }, {
                            type: 1,
                            text: '当然，光吃水果是填饱不了肚子的，除开生动有趣的采摘体验之外，这里推荐一家一个汇聚全国各地特色小吃的民俗风情浓郁的街道——藏马庄民俗村；人未到，味先至，离老远就能闻到浓浓的羊汤、酒香...真是应了那句话“酒香不怕巷子深”。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/12.png')
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/13.png')
                        }, {
                            type: 3,
                            text: '百度百科'
                        }, {
                            type: 4,
                            text: '电话：15206622616'
                        }, {
                            type: 4,
                            text: '地址：山东省青岛市黄岛区开城路中段藏马山国际旅游度假区'
                        }]
                    }],
                    live: [{
                        describe: '小镇里的诗和远方',
                        qrCodeImg: require('@/assets/images/qrCodeImg/hotel_14252.png'),
                        hotelId: '14252',
                        info: [{
                            type: 0,
                            text: '欢墅 · 度假合院（藏马山阿朵小镇）'
                        }, {
                            type: 1,
                            text: '推荐亮点：地处藏马山阿朵小镇，中式合院、独栋别墅；青砖黛瓦，具有浓郁的古民居建筑风格文化；各种精品家用设施一应俱全。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/14.png')
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/15.png')
                        }, {
                            type: 1,
                            text: '小院依山傍水，暮色时分，坐在观景阳台上吹着悠然晚风，看那山映斜阳天接水，晓看暮色朝望云。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/16.png')
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/zangmashan/17.png')
                        }]
                    }]
                }, {
                    value: 91,
                    label: '威海',
                    cover: require('@/assets/images/cityImg/weihai.png'),
                    titleCover: require('@/assets/images/cityTitle/weihai.png'),
                    describe: '威震海疆威海卫',
                    info: [{
                        type: 1,
                        text: '威海距离青岛200多公里，高铁1.5小时直达，这里有上溯千年的战国遗址刘公岛；有梦幻烂漫的天鹅湖和海草屋；还有让你口水直流的各色美食，是除青岛之外又一个旅游胜地。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/weihai/1.png'),
                    }, {
                        type: 3,
                        text: '小红书@木鸟民宿试睡官桃桃'
                    }],
                    play: [{
                        describe: '逛码头、吹海风、乐在其中',
                        info: [{
                            type: 1,
                            text: '船来船往的合庆码头，眺望大海的威海之窗，大海的波澜壮阔一定能够唤起你心中的那份激情澎湃。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/2.png'),
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/3.png'),
                        }, {
                            type: 3,
                            text: '小红书@小理解不吃香菜'
                        }, {
                            type: 4,
                            text: '电话：0631-7712301'
                        }, {
                            type: 4,
                            text: '地址：山东省威海市荣成市站前街'
                        }]
                    }],
                    eat: [{
                        describe: '本地美食与外国特色',
                        info: [{
                            type: 1,
                            text: '身为一个港口城市，除了本地的特色美食与海鲜大餐之外，更有日韩等多国美食文化交融，保证让你吃得眼花缭乱。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/4.png'),
                        }, {
                            type: 3,
                            text: '小红书@容！一枚护肤小赟儿'
                        }, {
                            type: 1,
                            text: '本地吃货推荐东城路夜市，有特色烧烤海鲜大排档、鸡蛋灌饼、桥头排骨还有街边串串等等，价格亲民实惠。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/5.png'),
                        }, {
                            type: 3,
                            text: '小红书@容！一枚护肤小赟儿'
                        }, {
                            type: 1,
                            text: '如果你想品尝一下异国料理或者钟爱韩国美食的话，那么韩乐坊夜市是你的不二选择；这里既是时尚潮流打卡地，也是年轻人的嗨乐街区。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/6.png'),
                        }, {
                            type: 3,
                            text: '小红书@橘子不是唯一的水果'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/7.png'),
                        }, {
                            type: 3,
                            text: '小红书@桑妮'
                        }, {
                            type: 4,
                            text: '电话：0631-3881111'
                        }, {
                            type: 4,
                            text: '地址：山东省威海市环翠区韩乐坊西街与华夏路交叉路口往东南约50米'
                        }],
                    }],
                    live: [{
                        describe: '出门就是海，<br>听着海浪声入睡',
                        qrCodeImg: require('@/assets/images/qrCodeImg/hotel_433.png'),
                        hotelId: '433',
                        info: [{
                            type: 0,
                            text: '斯维登·碧海云居尚品度假公寓'
                        }, {
                            type: 1,
                            text: '推荐亮点：地处金沙滩旅游度假区核心位置，开车五分钟即可到海边冲浪玩沙；榆木装修，各种特色房间；同时又远离闹市，独享幽静。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/8.png'),
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/9.png'),
                        }, {
                            type: 1,
                            text: '冬无严寒，夏无酷暑，气候宜人；周边有文登南海公园、演艺酒吧，在幽静中又添上一抹色彩。'
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/10.png'),
                        }, {
                            type: 2,
                            text: require('@/assets/images/city/weihai/11.png'),
                        },]
                    }]
                }]
        },
        {
            value: 10,
            label: "上海",
            cover: require('@/assets/images/areaTitle/shanghai.png'),
            list: [{
                value: 100,
                label: '上海市区',
                cover: require('@/assets/images/cityImg/shanghai.png'),
                titleCover: require('@/assets/images/cityTitle/shanghai.png'),
                describe: '来一场“东方巴黎”梦幻之旅',
                info: [{
                    type: 1,
                    text: '中国之最。上海位于我国大陆海岸线中部的长江口繁华的大上海，这里人流如潮、车水马龙。东方明珠塔卓然秀立于黄浦江岸边、现代化建筑群中，也不缺历史为我们留下的美景。夜晚,从黄浦江的游轮上看，明珠塔上点点繁星,熠熠生辉,光影流动，变幻奇妙。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/shanghai/1.png')
                }, {
                    type: 2,
                    text: require('@/assets/images/city/shanghai/2.png')
                }, {
                    type: 3,
                    text: '小红书用户'
                }],
                play: [{
                    describe: '历史古韵与现代之美的华章',
                    info: [{
                        type: 1,
                        text: '上海中西合璧，历史古韵与现代之美相结合，既有名胜古迹，又有现代乐园。外滩、豫园、南京路、人民广场、静安寺、新天地、迪士尼乐园等著名景点吸引中外游客前来打卡。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Sunny'
                    }],
                },{
                    describe: '一次童话世界奇妙之旅——<br>上海迪士尼乐园',
                    info: [{
                        type: 1,
                        text: '上海迪士尼乐园，位于上海市浦东新区川沙镇黄赵路310号，是中国内地首座迪士尼主题园，主题园区分为米奇大街、奇想花园、探险岛拥有迪士尼城堡等。游泳、滑冰、驾帆船，到深海捕鱼，乘气球升空，或是参观附近的名胜古迹。这些丰富多彩的节目，给迪斯尼世界更增添了几分魅，与你的童年和心中的英雄真实接触。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/6.png')
                    }, {
                        type: 3,
                        text: '小红书用户@神奇的猪脚'
                    }],
                },{
                    describe: '来了，来了，你的童话王国。',
                    info: [{
                        type: 1,
                        text: '上海迪士尼各大主题乐园没有之一，踏进每一个乐园都是新的天地。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/7.png')
                    }, {
                        type: 3,
                        text: '小红书用户@超级可爱'
                    }, {
                        type: 1,
                        text: '与可爱的米奇、唐老鸭、憨傻的布鲁托一起拍照，在迪士尼乐园里你的公主梦，王子梦都可以轻松实现，当你触碰这些童话角色时，自己好像身处另一个世界，梦幻承包下就是你的拍照胜地。快让你与它们的合照刷爆自己的朋友圈。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/8.png')
                    }, {
                        type: 3,
                        text: '昆明超凡旅行社有限公司百度广告'
                    }, {
                        type: 1,
                        text: '螺旋轨道，采矿的小矮人，空中大反转，在温馨的童话世界里来一次紧张刺激的穿梭。'
                    }, {
                        type: 4,
                        text: '电话：(021)31580000，4001800000'
                    }, {
                        type: 4,
                        text: '地址：上海市浦东新区川沙镇黄赵路310号'
                    }]
                }],
                eat: [{
                    describe: '与大上海来一次味觉狂欢',
                    info: [{
                        type: 1,
                        text: '南翔小笼，上海生煎包，排骨年糕，油氽馒头，上海酱鸭，蟹壳黄等等，都是颇具上海特色的美味小吃，口味丰富，营养健康。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/4.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@一颗柠檬'
                    }],
                },{
                    describe: '奇趣可爱美食吃不够',
                    info: [{
                        type: 1,
                        text: '迪士尼的可爱体现在吃喝娱乐之中，就连美食也是造型奇趣。味道更是能够满足游客们的需求。美食、快餐应有尽有。入口留香，香酥可口。价格实惠，你值得一试。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/9.png')
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/10.png')
                    }, {
                        type: 3,
                        text: '小红书用户@蕾雅格格'
                    }, {
                        type: 1,
                        text: '在迪士尼享受美食，怎能少得了Stargazer Grill星露台餐厅，上海迪士尼度假区最大餐厅之一，绝佳的地理位置可俯瞰整个乐园，明日世界芝士牛肉汉堡令人着迷。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/shanghai/11.png')
                    }, {
                        type: 3,
                        text: '小红书用户@寇寇Amy'
                    }, {
                        type: 4,
                        text: '电话：4001800000'
                    }, {
                        type: 4,
                        text: '地址：上海市浦东新区川沙镇黄赵路310号上海迪士尼乐园'
                    }],
                }],
                live: [{
                    describe: '轻奢享受，超值舒适',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_66.png'),
                    hotelId: '66',
                    info: [{
                        type: 0,
                        text: '城宿·云居（近迪士尼浦东机场loft两居）'
                    },{
                        type: 1,
                        text: '推荐亮点：交通便利，轻奢舒适，液晶大屏，设备齐全，落地窗内温馨居室，落地窗外，迪士尼梦幻乐园，都市美景尽收眼底。 既然想要享受良辰美景，童话天地，一个温馨的住处必不可少。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/shanghai/12.png')
                    },{
                        type: 1,
                        text: '黄金路段，外观大气，简单易寻。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/shanghai/13.png')
                    },{
                        type: 1,
                        text: '1.5米双人床，柔软的床垫，希望你有一个良好的睡眠。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/shanghai/14.png')
                    },{
                        type: 1,
                        text: '整洁厨房，让整个屋子更有家的味道，吃腻了景点的大鱼大肉，身边人总能给你带来不一样的感觉。'
                    },{
                        type: 2,
                        text: require('@/assets/images/city/shanghai/15.png')
                    },{
                        type: 1,
                        text: '精装修，舒适沙发，百兆wifi，可升降桌椅，液晶网络大屏，上海的夜晚与家人共享，家的温馨这里可以给你。'
                    },]
                }]
            }, {
                value: 101,
                label: '崇明',
                cover: require('@/assets/images/cityImg/chongming.png'),
                titleCover: require('@/assets/images/cityTitle/chongming.png'),
                describe: '上海宝岛，水上仙境',
                info: [{
                    type: 1,
                    text: '吹海风、堆沙堡、挖水坑，是孩子的最爱。梦想中，上海崇明岛是个不错的去处。   “长江门户，东海瀛洲” ，一位款款而出的“上海新秀”。'
                }, {
                    type: 2,
                    text: require('@/assets/images/city/chongming/1.png')
                }, {
                    type: 3,
                    text: '小红书用户@楊大人'
                }],
                play: [{
                    describe: '“候鸟天堂”，东滩湿地公园',
                    info: [{
                        type: 1,
                        text: '有地震馆、观鹭台、雀鸣渡等景点，海边赏万鸟齐飞，路旁看花田片片。日出、日落绝美海景让你陶醉，深入大海，在堤坝上享受海风暖阳，与各种小动物一起共度悠闲时光。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/2.png')
                    }, {
                        type: 3,
                        text: '小红书用户@大a柚'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/3.png')
                    }, {
                        type: 3,
                        text: '小红书用户@折腾的小肉团'
                    }, {
                        type: 4,
                        text: '电话：(021)39367000'
                    }, {
                        type: 4,
                        text: '地址：上海市崇明区东滩东旺中路'
                    }]
                }],
                eat: [{
                    describe: '尝过农家乐才算是真的上了崇明岛',
                    info: [{
                        type: 1,
                        text: '崇明蟹、清蒸桂鱼、崇明特色春卷等崇明特色美食，酸甜苦辣，应有尽有，美味米酒配佳肴，农家乐里快活又逍遥。特色海鲜，肉质鲜美，在小小农家里吃出大海的味道。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/4.png')
                    }, {
                        type: 3,
                        text: '上海轩植农家乐专业合作社官网'
                    }, {
                        type: 1,
                        text: '崇明清水蟹青背白肚、金爪黄毛、膏脂丰满、肥满度高、味道鲜美。红烧、清蒸原汁原味，正宗地道的味觉体验，只有崇明岛上的农家硬菜，历经长期烹饪，味入三分。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/5.png')
                    }, {
                        type: 3,
                        text: '小红书用户@Alice.S'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/6.png')
                    }, {
                        type: 3,
                        text: '马蜂窝旅游官网'
                    }, {
                        type: 1,
                        text: '说到崇明岛的农家乐，第一必然是老滋味农家乐，该店位于上岛必经之处，交通便利，白斩鸡、油焖青皮茄子、爆炒螺蛳、银鱼跑蛋等岛上特色菜肴，汤鲜味美，店家精心布置，虽少了华贵之气，但也颇有一番意境。'
                    }, {
                        type: 4,
                        text: '电话：13816851311，13818538047'
                    }, {
                        type: 4,
                        text: '地址：陈家镇陈西村1699号'
                    }]
                }],
                live: [{
                    describe: '近海精品别墅，奢华超值。',
                    qrCodeImg: require('@/assets/images/qrCodeImg/hotel_66.png'),
                    hotelId: '66',
                    info: [{
                        type: 0,
                        text: '欢墅·精品民宿崇明金茂悦公馆店'
                    },{
                        type: 1,
                        text: '情趣和文化气质的交错，双大堂设计，设施齐全，高尔夫球场景观推窗可见，五星级床品家具，干净整洁，拎包入住。托斯卡纳风格建筑，高绿化。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/7.png')
                    }, {
                        type: 1,
                        text: '独门独栋，超高绿化，让你真正做这里的主人。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/8.png')
                    }, {
                        type: 1,
                        text: '柔软大床房，木质地板，干净整洁，典雅的风格、舒适的睡眠。一觉醒来，新的一天会更加美好。'
                    }, {
                        type: 2,
                        text: require('@/assets/images/city/chongming/9.png')
                    }, {
                        type: 1,
                        text: '大型落地窗，采光充足，宽敞明亮，开窗可见高尔夫球场。奢华高配，提升格局。'
                    }]
                }]
            }]
        }
    ],
}

export default {
    state,
};