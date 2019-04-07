// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    share:false,

    array: [{
        src: 'https://img.jogiter.cn/third/fool.png',
        name: '愚人',
        biaoqian: '理想，纯真，轻盈',
        paimian: '①轻巧的脚步，地上的障碍物无法限制他。年轻人穿著华丽的衣服，走在悬崖边，他的眼中是他的理想。他左手拿著玫瑰，右手携带全部的家当（包裹），到处流浪。他脸部表情充满著机智和梦想。旁边的狗提醒他，不要一直勇往直前，要停下来想一想。那根支撑包裹的杖象征意志的力量，小狗是危机的暗示。\n\r\n\r②桂冠代表胜利。红色的羽毛代表追求新事物的愿望。包袱代表无法舍去的世俗事物。玫瑰代表纯洁的内心。五彩缤纷的衣服代表内心的冲击。 棍杖代表愚者充满力量与活力面对新旅程。\n\r\n\r③头上戴著华丽的头饰，间上扛著手杖，映在眼中的是他的理想国。现实家说他狂妄，理想家认为他有冒险的精神。\n\r\n\r“每天都充实，乐趣便在其中”是一句很适合这张牌的古谚语。当你周遭的人都对某事提防戒慎，你却打算去冒这个险时，愚人牌可能就会出现。例如，“噢，我认为现在是换工作的好时机，外面到处都是失业的人哪！”或者“什么！你们俩分开了？你到底在想什么啊？”',
        jieshi: "憧憬自然的地方、毫无目的地前行、喜欢尝试挑战新鲜事物、四处流浪。明知是毫无意义的冒险，错误的选择及失败的结果，却一意孤行，盲目地追求梦想而完全忽略现实；好冒险、寻梦人、不拘泥于传统的观念、自由奔放、一切从基础出发、四处流浪。自由恋爱、不顾及他人看法、以独特的方式获得成功、轻易坠入爱河、浪漫多彩的爱情、独特的恋人、等待交往机会。工作上具冒险心、追求新奇。热衷于事业或学业、以独特的方式取得意外的收获、由于好奇心对当前的学业产生浓厚的兴趣、把握重点、寻求捷径、倾向于自由的工作氛围、适合艺术类工作或从事自由职业。健康状况佳。旅行有意外收获。美好的梦想。",
        liangxing: '在两性关系分析当中，愚人暗示一段生活在当下或随遇而安的时期。你可能即将私奔，或在旅行途中遇到一位伴侣，或即将遇到一位喜欢目前生活，而不想计划将来的伴侣。愚人有时候也可能是在形容伴侣。这个伴侣是难以捉摸的、天真的，或者不愿受到任何长期计划和关系的约束。',
        jieshi2: '自负、固执、不安定、墨守成规、缺乏责任心、生活在梦幻中、不现实、不会应变、停滞不前、行为古怪、方向错误、感情不稳定\n\r\n\r冒险的行动，追求可能性，重视梦想，无视物质的损失，离开家园，过于信赖别人，为出外旅行而烦恼。冒险的行动，追求可能性，重视梦想，无视物质的损失，离开家园，过于信赖别人，为出外旅行而烦恼。心情空虚、轻率的恋情、无法长久持续的融洽感、不安的爱情的旅程、对婚姻感到束缚、彼此忽冷忽热、不顾众人反对坠入爱河、为恋人的负心所伤、感情不专一。工作缺乏稳定性、无责任。成绩一落千丈、没有耐心、行事缺乏计划、经常迟到、猜题错误导致考试失利、考前突击无法为你带来太大的效果。因不安定的生活而生病。不能放心的旅行。不能下决心、怪癖。不切实际。\n\r\n\r意味着你在事业上过于自负、固执己见，即使有旁人的劝告都无法让你产生任何的警觉，失去了最关键的机遇，结果只能是事倍功半。感情上近乎执着地编织太多虚幻的梦，与伴侣无法顺利沟通，恋情不安定，感情忽冷忽热.',
      },
      {
        src: 'https://img.jogiter.cn/third/magic.png',
        name: '魔术师',
        biaoqian: '精神、动机、意志',
        paimian: '①牌面为罗马神话的墨丘利，有著自信的笑容和炯炯有神的眼睛。牌的桌面摆了宇宙四要素：生命树（火）、剑（风）、五芒星（土）、圣杯（水）。\n\r\n\r魔术师头顶上有个无限的符号，腰带为一头尾相接的蛇，是精神永恒的象徵。魔术师右手拿著权杖指向天空，左手指著地面，代表权力的交流和精神的赠与。魔术师脚底下为玫瑰和百合，表示人类的动机，反映神的意志，指挥天地。玫瑰代表生，百合代表死亡。\n\r\n\r魔术师为第一张牌，也暗示著你本身也是个魔术师，自己能操纵宇宙的力量。\n\r\n\r②白色长袍代表纯洁的内心，深红色斗篷代表魔术师的活动意义深远。',
        jieshi: '事情的开始，行动的改变，熟练的技术及技巧，贯彻我的意志，运用自然的力量来达到野心。\n\r\n\r成功、果断、好的开端、计划完美、发展空间大、智力非凡、思维活跃、想象力丰富、拥有默契的伴侣、出现新恋人\n\r\n\r意味着你在事业上有良好的动机、宽阔的心胸和充足的准备，一切都在你的计划之中，把握住机会向着成功稳步前进。爱情更是游刃有余，外在的环境根本对你没有作用，处于主动地位。',
        jieshi2: '失败、态度消极、做事匆忙、优柔寡断、才能平庸、缺乏技术、没有判断力、没有创造力、爱情没有进展、注意伴侣的行为\n\r\n\r意志力薄弱，起头难，走入错误的方向，知识不足，被骗和失败。\n\r\n\r意味着你有投机心态，躲在自己的保护层中生怕受到伤害，对事业的态度有了些许偏差，表现出漫无目标和缺乏自律。不肯遵守一些基本准则，不惜靠控制对方甚至毁灭对手的方式来实现自己的目的，所以将带来精神、情感或健康上的种种问题。',
        liangxing: '魔术师是形容一种扎根于现实的伙伴关系，没有受到物质上的种种限制。它暗示一种主动的两性关系，而且可能是伴侣中的一个提供灵感，另一位脚踏实地，让这些主意变成具体成果。\n\r\n\r魔术师意味着一个拥有强烈意志、受过训练的心智及清晰的目标感的人。对于自己的目标，他拥有很好的方向感，且打开心胸，接纳新的理念。',
      },


      {
        src: 'https://img.jogiter.cn/third/priestess.png',
        name: '女祭司',
        biaoqian: '精神、动机、意志',
        paimian: '一个聪明的人或者女人，可能作出一个好决定。这个圣洁的女祭司，端正的坐著，手中还拿著一卷书，证明她充满智慧，放心交给她去决定好了。\n\r\n\r它也是一张代表精神和心灵发展的牌，不代表具体事物，而代表可能性。你应该向内心探索，一切困惑的答案就藏在你的心中。\n\r\n\r女教皇代表去思考可以导致实际结果的构想。这并不是一张代表具体事物的牌，而是一张代表可能性的牌。我们每个人都在我们的人生当中持续的耕耘和收获，而女教皇就是散播那些种子或理念的行动。\n\r\n\r女教皇暗示你应该要相信你的直觉，因为在这一点上，有些东西你可能看不见。高位的女教皇是一张代表精神和心灵发展的牌。它代表了向内心探索的一段时期，以便为你人生的下一个阶段播种，或者去消化你在肉体的层次上所处理的事情。',
        jieshi: '开发出内在的神秘潜力，前途将有所变化的预言，深刻地思考，敏锐的洞察力，准确的直觉。\n\r\n\r知性、优秀的判断力和洞察力、独立自主、有知己、善于交流、意志坚强、擅长精神方面的研究、柏拉图式的恋爱、冷淡的恋情\n\r\n\r意味着在事业的每一步都要有准确的分析，小心利用高超的直觉来推测将要发生的每件事。周围的变化也是预测未来的重要依据，对未来走向不断进行逐步的修正。感情上有含蓄谨慎的倾向，首先通过被动的接受，然后得出自己的答案。追求并拥有高度精神层面的恋爱，对感情的发展有相当的掌握。',
        jieshi2: '过於洁癖，无知，贪心，目光短浅，自尊心过高，偏差的判断，有勇无谋，自命不凡。\n\r\n\r无知、冲动、缺乏理解力、神经质、有洁癖、对人冷淡、自我封闭、与女性朋友争执、单相思、健康不佳、晚婚或独身主义、不孕\n\r\n\r意味着事业上不能继续用精神加以分析，开始采用其它的方式决定未来的发展方向，并努力寻求外来的援助与合作。感情上冷漠迟缓，态度不明确，经过暂时的独处和内心的反思后，再次回到现实生活中才可能重新找到伴侣。',
        liangxing: '在两性关系分析当中，女教皇可能代表一个双鱼座的人；或者可能意味着在你得以接收到这份关系给予你的种种之前，你需要先反求诸己。接受性、被动以及内在的发展，都是这张牌的意涵。\n\r\n\ 有时候女教皇暗示一种拥有高度精神或心灵发展的关系，你们俩人可以一同学习、成长和发展。',
      },

      {
        src: 'https://img.jogiter.cn/third/empress.png',
        name: '女皇',
        biaoqian: '自然、稳健、完美、心灵',
        paimian: '美丽的女皇坐在优雅舒适的椅子上，四周一片茂密森林，令人有种无忧无虑，游闲自在的感觉，椅子旁还放著一颗心，似乎是她有心赐给你这些丰沃的土地和果子，圆满的爱，应该好好的谢恩了。\n\r\n\r她是在有形世界心灵层面的显现，象征创造力和聪明才智，也是我们梦想与渴望的化身。拥有这张牌的人无论在事业还是感情上都坚持脚踏实地，并得到事业上的成功和充实的感情生活，踊跃的创新思维和杰出的思考能力使他们始终站在社会进步的前列。\n\r\n\r 和教皇一样，她头带三重王冠，代表圣父、圣子和圣灵。这象征有形世界中，心灵层面的显现。这张牌也暗示透过情感而的到满足和理解。\n\r\n\r简单言之，女皇可能意味着实现计划，或朝向计划的下一个自然步骤迈进，亦即你又向目标靠近了一步。这张牌意味家庭状态的稳定与和谐，而这通常是透过把爱从思考当中，带往内心来达成的。',
        jieshi: '幸福，成功，收获，无忧无虑，圆满的家庭生活，良好的环境，美貌，艺术，与大自然接触，愉快的旅行，休闲。\n\r\n\r繁荣、感情丰富、信仰坚定、心胸开阔、生活优雅、财运佳、公众人物、有魅力的女性、充实的爱、有结果的恋情、怀孕 \n\r\n\r 这张牌代表脚踏实地的工作最终将得到事业上的成就，经过努力得到的经验将帮你在以后的成功路上走得更加顺利。感情上拥有优雅与毫不保留的爱，同伴侣的时光充满了感情和快乐，并拥有非凡的活力，它也可以形容怀孕。',
        jieshi2: '不活泼，缺乏上进心，散漫的生活习惯，无法解决的事情，不能看到成果，担於享乐，环境险恶，与家人发生纠纷。\n\r\n\r平庸、任性、迷惑、内心动摇、不思进取、自负、傲慢、疲倦、浪费、虚荣心强、计划搁置、不良的男女关系、不孕、流产\n\r\n\r工作中即便脚踏实地也无法达到要求，发现不足正在努力改正。感情上过于追求理想化，无法容忍有缺陷的感情。在家庭或两性关系中可能会遇到困难，关于孩子的问题上，它可能意味着流产、堕胎或生产。',
        liangxing: '在两性关系分析当中，女皇暗示朝着两性关系的下一个自然阶段迈进。它也可能是在形容怀孕，因为孩子通常会使两性关系进入一个新的阶段。对和家庭观念有关的两性关系而言，这是一张相当积极的牌。在这段期间内，你和伴侣是透过感情和欢乐来贴近人生，而不是经由思想。在这段关系中，有更多的成长和活力产生。',
      },

      {
        src: 'https://img.jogiter.cn/third/emperor.png',
        name: '皇帝',
        biaoqian: '精神、动机、意志',
        paimian: '皇帝表示一种训练和实际致力于生活。皇帝 THE EMPEROR 皇帝代表父亲，法律，生活稳定，也可以指碰到一个年纪及权力在你之上的人。也代表自律和努力而来的成功。逆位的代表缺乏自律与退缩。\n\r\n\r通常皇帝代表的是一个正直、公平和实际的人。假设他给予你忠告，那么他的建议都是来自他自己的亲身经验。他有点武断的倾向，但是当他在许下承诺后，通常，是值得信赖的。而当你也允下承诺时，他会期望你能实行它，假如你做不到，他是不会再给你第二次机会的。\n\r\n\r宝座上端坐着至高无上的皇帝，他头戴镶嵌着宝石的皇冠，手中掌握着象征权力和地位的权杖。阅历丰富的他面色凝重，即使已经是一国之君，但仍然身着铠甲，时刻准备为国家去迎接挑战。\n\r\n\r皇帝意味透过自律和实际的努力而达到成功。它可以代表你生活中一段相当稳定，且井然有序的时光。这张牌可以暗示遭遇到法律上的问题，或是碰到某个地位、权利都在你之上的人，例如法官、警员、父亲，或具有父亲形象的人。',
        jieshi: '光荣，权力，胜利，握有领导权，坚强的意志，达成目标，父亲的责任，精神上的孤单。\n\r\n\r坚强的意志、成绩突出、果断、专制、有领袖风范、值得信赖、物质条件优越、伴侣与你年龄悬殊、嫁妆丰厚\n\r\n\r事业通过自律和脚踏实地的努力取得了相当好的成绩，同时务实的态度也会让你在更长的时间里处于事业的巅峰。在感情方面你不太擅长表达，尽管你有很好的物质基础。两性方面你更喜欢扮演父亲的角色，付出的往往是具体的某个事物，而不是情感，所以会感觉有些压抑。',
        jieshi2: '幼稚，无力，独裁，撒娇任性，平凡，没有自信，行动力不足，意志薄弱，被支配。\n\r\n\r意志薄弱、幼稚、武断、固执、傲慢、疲劳过度、经济基础薄弱、爱情很勉强、痛苦而没结果的恋情\n\r\n\r事业会因为固执和武断而遭到失败。感情上因为缺少自我的约束而表现不专一，可能拥有不只一个伴侣。缺乏对伴侣的承诺，也没有坚实的物质基础，所以你很难得到真正的伴侣。',
        liangxing: '皇帝牌可形容一个务实、武断且通常是纪律严谨的人。他是一个顶不错的物质供应者，然而表达情感对他来说可就不是件简单的事了。浪漫和梦想的事对这个男人的吸引力并不大，因为他较喜欢他看得到、摸得着的东西。假设他无法看见或触碰到它，他是不太可能相信它的。\n\r\n\r在两性关系中，这个男人会扮演父亲形象的角色，以确保他能够驾驭这段关系，特别是在物质层面上。由于他的自律和喜欢勤奋地工作，所以通常做生意方面都可以得到成功。\n\r\n\r在感情方面他可能会比较压抑，因为他很难理解看不见的东西。在遇上伴侣向他多做了些要求时，他可能会说：“你到底想要什么？你有一个很好的家，一部新车，和所有你想得到的东西，你到底还需要什么？”\n\r\n\r在两性关系中，如果伴侣所在意的是情感上的需求，那就会对他造成困扰了。因为对他而言，付出就是给予某些具体的东西。',
      },
      {
        src: 'https://img.jogiter.cn/third/hierophant.png',
        name: '教皇',
        biaoqian: '精神、动机、意志',
        paimian: '教皇代表需要为你的心灵成长，及人生方向付起责任。\n\r\n\r他是宗教和精神上的权威。它总会为我们找到心灵上的出口，他的慈悲与德行，必能指示我们不会误入歧途，踏上认清良心，觉今是而昨非的道路。尤其当你感到内心愧疚的时候，他总会乐於静听你的忏悔。 这是一张代表唤醒良心与善良觉醒的牌，同时也是张关于宗教信仰与传统的牌。同皇帝所代表的物质主宰相比，他更趋向于精神层面，他是精神方面的权威，是未知世界的解释者。因为教皇能够直接与上帝联系，他用慈悲与洞察力试图拯救世人的灵魂，并用自己的言论引导人们走向正途。\n\r\n\r牌面中的教皇高举双手向世人传播教义，信徒们虔诚地跪在地上聆听他的教诲。然而需要注意的是他同时也是传统知识和保守道德的代表，他控制人们的思维，使人的眼界变得狭小。只有彻底放弃陈旧的一切，探索新的解决方式，可能还有希望。教皇暗示你向某人或某个团体的人屈服了。或许这正是你为自己，及心灵上的需求负起责任的时刻了。你目前的行事作风并非应付事情的唯一方式，假设你愿意加以探索的话，或许你就会找到新的可能。',
        jieshi: '温柔、博爱、受人信赖、受重视、工作出色、贡献突出、眼界狭窄、从善如流而得到好处、有贵人相助、适宜接触宗教、与年长的异性有缘、姻缘佳\n\r\n\r援助，同情，宽宏大量，可信任的人给予的劝告，良好的商量对象，得到精神上的满足，遵守规则，志愿者。\n\r\n\r信心十足，能够正确理解事物的本质，工作上外来的压力过多，别人对你的期望值也很高，使你有被束缚的感觉。应该寻找新的工作方法，尽管会面对很大的阻力，但结果会证明这样做是值得的。爱情上屈从于他人的压力，只会按照对方的要求来盲目改变自己，自以为这是必要的付出，其实不过是被迫的选择。伴侣也不会对你保持忠诚，并很难满足双方真实的需要。',
        jieshi2: '冷漠、善于表达、太罗嗦、孤立无援、成功无望、眼界开阔、思路敏捷、改变以往感情上的不足、不被认同的恋情、对伴侣关心过度、姻缘淡\n\r\n\r错误的讯息，恶意的规劝，上当，援助被中断，愿望无法达成，被人利用，被放弃。\n\r\n\r牌面倒立则表示事业上多了些灵活的态度，不再刻板遵循旧有的方式，勇于创新形成自己独特的理念，为自己的真实想法而活、而工作。感情上开始正视自己对感情的真实感受与做法，尽管依旧会听取对方的意见，但以不会全盘接受。当你感到无法接受对方的意见时，会及时与其沟通，找出改善关系的做法。',
        liangxing: '教皇所形容的这段关系，是遵从他人期望的一段关系。这段关系中的伴侣很难忠实于自己，也很难忠实于在两性关系中他们真正的需求，因为他们在适应他人对他们的期望上觉得压力重重。\n\r\n\r西莉亚抱怨先生侏罗日以继夜的工作，以至于他们的婚姻生活变得索然无味。当我在稍微深究时，我发现她会和侏罗结婚，是由于她家人的大力赞成。她坦言已开始她宁愿去环游世界，或许在决定一位长期伴侣之前，还可以多碰到一些对象，然而她的家人觉得她是打算“做一些恣意妄为的事”，因而向她施压要她结婚。起初，她颇享他们的好意，但是四年之后，她便为没有反抗他们的压力而深感懊悔。\n\r\n\r教皇也可能暗示你的两性关系已流于一种形式或规矩，你的态度变成“别人怎么做，我就跟着怎么做”，而这并不是去经历一段两性关系的唯一方式。你应该去找寻另一种新方式，可能你会感受到周遭的人所形成的阻力，但后来还是可以证明这么做是值得的。',
      },

      {
        src: 'https://img.jogiter.cn/third/lovers.png',
        name: '恋人',
        biaoqian: '萌芽、爱情、阳光、美好',
        paimian: '恋人牌意味，为了爱的关系而做的某些决定。\n\r\n\r阳光普照，有个天使出现在一对男女的上方。他们两个人裸身站在两棵树之前。女人身后是一棵知识树，而男人背后则是生命树。恋人牌是有关选择的牌，为了找寻满足，男人望向女人，而女人则望向精神或内心。\n\r\n\r恋人牌代表的是青春期。伴随着道德及知识的独立，有关性的事情就出现了。性趋力引导你远离独处的状态，而朝向和别人形成关系，以便走向爱的道路。在爱当中你可能会放弃自我控制的需要，以至你无法从别人身边或生活本身孤立出来。\n\r\n\r恋人 THE LOVERS 代表热恋。一段新关系的形成。也可是成为决定一段关系应否转变成突破。逆位的代表逃避责任与承诺，空想又或是一段关系的结束。\n\r\n\r这是塔罗牌中解释爱情最好的一张牌，他代表这人生的青春期。尽管阳光普照，充满了幸福的感受，但恋人的后面却有着很多考验在等着他们——希望之树和毒蛇盘踞的禁果之树。 恋爱中的情侣可以彼此协助、支持，浪漫成了这段美好时光的主题。但恋爱中的人必须面对感情上的抉择，就是在众多的异性中选择其中的一个作为伴侣，所以说爱情是既美丽又残酷的。在解牌时一定要注意“结合”背后的“选择”，也就是要有所取舍。',
        jieshi: '敏感、前途光明、有志同道合的朋友、与人合作、对未来的抉择、决定未来命运的时机、浪漫的爱情、有爱情出现的预感\n\r\n\r撮合，爱情，流行，兴趣，充满希望的未来，魅力，增加朋友。\n\r\n\r感情和肉体对爱的渴望，它暗示恋情将向彼此关系更亲密的方向发展。而在事业上将面临重大的抉择，它将关系到你的未来前途。',
        jieshi2: '禁不起诱惑，纵欲过度，反覆无常，友情变淡，厌倦，争吵，华丽的打扮，优柔寡断。\n\r\n\r幼稚、退休、孤独、有阻力、眼花缭乱、血气方刚、对结果失望、充满戒心、逃避爱情、恋情短暂、分手、多情\n\r\n\r青春年少的你们还没有准备好迎接现实生活，感情上表现幼稚。你对成长虽有期待与希望，却希望永远待在父母的保护层里面躲避危险，逃避责任。在事业方面，你总保持着很高的戒心，让对方感到很不舒服，不愿同你合作。',
        liangxing: '恋人牌暗示一段新关系，或既有关系的新阶段。这张牌也可以代表决定去爱，或展开新关系，好让这段新关系或新阶段可以安全的开始。它又可以形容沉醉于爱河，或处于一段关系中的罗曼蒂克。',
      },

      {
        src: 'https://img.jogiter.cn/third/chariot.png',
        name: '战车',
        biaoqian: '强者、胜利、荣耀',
        paimian: '战车牌意味训练有素的心智。战车 THE CHARIOT 代表由于坚持而成功，也产意味着你对宿命正以理智，坚持抗拒旧传统。逆位的代表被积压的情绪蒙闭、需要创新去突破旧传统。\n\r\n\r一名武士站在战车上，右手拿着一根绳子或权杖，肩膀上则有两枚蓝色的月亮。战车的蓬盖上缀满了星星，而腰带上则展示着黄道十二宫的各种符号。战车部分停在水中，部分停在陆地。武士的前方有两尊狮身人面兽，一黑一白，正好与女教皇牌上的柱子相呼应。\n\r\n\r这张牌描绘的是克服障碍、获得胜利的王者战车。牌面上的胜利者以一种强有力的姿态站在战车上，展现他在人世间的丰功伟业。拉动战车的一黑一白两只狮子，时刻准备继续前进。\n\r\n\r这张牌是强者的象征，它与力量息息相关，意味着由坚持而获得成功。“永不放弃”是这张牌的主题，无论前途有多少艰难险阻，你都要继续走下去，同时也会由此掌控自己和周遭事物的命运。战车上的胜利者象征人类的灵魂，控制着两只狮子象征人类意志与本能，在时间中穿行。',
        jieshi: '活泼、有野心、握有指挥权、出发、前进必胜、速战速决、战果辉煌、开拓精神、击败对手、恋爱的胜利者、热烈的爱情\n\r\n\r努力而获得成功，胜利，克服障碍，行动力，自立，尝试，自我主张，年轻男子，交通工具，旅行运大吉。\n\r\n\r事业上显示出才能，办事卓有成效。自信而富理智的你将让客户更有信心，愿意与你共同合作。在感情上正在努力控制自己的情绪，而且控制得很好，这让你的感情发展得更顺利。',
        jieshi2: '怯懦、有强敌、受挫折、丧失斗志、急性子导致失败、缺少资金、不感兴趣、被拒绝、使对方失去信任、对爱情采取逃避态度\n\r\n\r争论失败，发生纠纷，阻滞，违返规则，诉诸暴力，顽固的男子，突然的失败，不良少年，挫折和自私自利。\n\r\n\r放弃以往在事业上所坚持的，结局将会更加完美。感情上失去方向，你已经没有以往的冷静，这让对方在心中产生了不信任感，也许你要反省一下自己的所作所为了。',
        liangxing: '战车暗示控制你的情绪，对目前的两性关系应该是有帮助的。它也可能是形容一个能够张控情绪，而充满自信的男人。在生意上或任何需要发挥控制力的处境中，他可能会成功。\n\r\n\r这张牌所传递的讯息是“不要放弃”，因为成功是可能的，只要你能协调好关系中的冲突（互相对抗的力量或能量）。',
      },

      {
        src: 'https://img.jogiter.cn/third/strength.png',
        name: '力量',
        biaoqian: '勇气、强大、内心',
        paimian: '力量 THE STRENGH 象征内心的力量足以面对任何的困难。 逆位代表逃避内心的欲望和恐惧，消极抵抗。\n\r\n\r力量牌暗示你拥有足够的内在力量去面对人生。在力量牌上面，一个女人正在安抚一头狮子。尽管狮子可以轻易的撂倒她，然而他却在她的爱和温柔当中平静了下来。此时天际晴朗无云，而一串花环围绕于她的腰间。\n\r\n\r这张牌中胜利女神弯着腰正在抚摸一头凶猛的狮子，并用她的温柔与爱来安抚着怀中代表恐惧的狮子，它是爱与坚强意志的象征。正是因为有了爱与意志，人类才能克服困难，在历史的长河 中不断前进。狮子代表人类的本能，而美女则象征爱情和服从，二者必须保持和谐，互相支持才能成为征服世界的力量。此外它还意味着你有能力解决现在所面临的困难局面，并对自己内在的力量充满信心。\n\r',
        jieshi: '不屈不挠、全力以赴、克服难关、坚强的信念、旺盛的斗志、刻苦的努力、超凡的勇气、神秘的力量、轰轰烈烈的能够经受考验的牢固爱情\n\r\n\r当牌面正立时，在事业上你不断突破自我，上司和客户都对你有充分的信心，成就接踵而来。在爱情上，你将发展一段真正亲密的感情，你们全心投入，相互倾诉，丝毫没有距离感。',
        jieshi2: '疑心过度、犹豫不决、缺乏实力、没有耐心、危险的赌注、失去自信、失去别人的信任、故弄玄虚、自大、蛮干、禁不住诱惑、爱情无法持久\n\r\n\r当牌面倒立时，内心的恐惧使你畏首畏尾，进而遭遇事业的瓶颈，感到失去了自信。在爱情上患得患失，失去清醒的判断。',
        liangxing: '力量这张牌暗示你拥有足够的力量和勇气，让你可以在一段两性关系中发展出真正的亲密感，而不必试着要去控制它，或者被它所控制。你有充分的勇气可以处理任何可能发生的困难，而无需因恐惧而逃避。\n\r\n\r在两性关系的分析中，这是一张积极的牌，因为它暗示和这关系中的人能够互相倾听及倾诉。他们的行动是来自内在的力量，而非出于恐惧，可以发展出真实的亲密感，不会有五角星六、或圣杯六那种限制性的角色。',
      },


      {
        src: 'https://img.jogiter.cn/third/hermit.png',
        name: '隐士',
        biaoqian: '省思、内敛、探索',
        paimian: '隐士牌暗示着：省思的一段时间。\n\r\n\r隐者 THE HERMIT 暗示一段反省的时间，象征内心探索、及心灵上的引导，或者是由人帮助别人。逆位的代表孤单，要回到力量牌上找寻内在的力量。\n\r\n\r隐士牌中没有明亮的色彩，这反而能让他看见生命中幽微的事物。他站在雪地中，一只手提着一盏有颗六角星星的灯，另一只手持着一根棍子。这星星包含了朝上及朝下的三角形，意味结合火和水元素的需要。\n\r\n\r隐士需要独处以便反省。这张牌暗示自日常生活退隐，好让潜意识活跃起来。先行动，然后再来思索推敲那些行动是有用、哪些是浪费的。这将会让你对未来该如何行动，有一个清晰的理解。\n\r\n\r隐士这张牌代表暂别外在的世界，以便唤醒内在的自我。你可以透过倾听自己的心声、梦想，或倾听朋友、咨商员、老师的话，来完成这件事情。',
        jieshi: '高度智慧、思虑周密、冷静寡言、追求高层次的事物、正中要害、渐入佳境、出局、追求柏拉图式恋情、单相思\n\r\n\r当牌面正立时，你在事业的黄金时期引退，旁人都不了解，这不过是你在为下一次黄金时期的到来进行休息而已。感情方面你将深刻思考自己在这段感情中的角色和地位，并探索彼此之间的关系。',
        jieshi2: '工作狂、铁面无私、偏见、有怨言、不够通融、孤独、固执、戒备心强、迷失方向、举止轻浮、怀疑和逃避爱情\n\r\n\r当牌面倒立时，在事业中过多的投入已经让你不愿面对其它事情，因而事业有了突破性的进展。在感情方面，用工作繁忙来逃避这段感情的发展，对伴侣态度冷淡，因为害怕感情的发展而在关键时刻退缩，使对方心寒。',
        liangxing: '隐士可能象征着向内心探索的需求，暂时自一个两性关系中退出，以决定你想要什么、要往哪里去。或许你正用了比平常更多的时间来疏远两性关系，而将思想更集中于自己身上。\n\r\n\r可能你正在协助伴侣，让他（她）对他（她）自己，和他（她）的人生有跟深刻体会。它也可能单纯智某个处女座的人。当隐士牌出现在两性关系的分析中，代表你更加清楚在某段两性关系中你的独立性，或是注意到你需要独处，以面对你的内在需求。',
      },

      {
        src: 'https://img.jogiter.cn/third/fortune.png',
        name: '命运之轮',
        biaoqian: '改变、时机、可能性、境遇',
        paimian: '命运之轮表示：在你尝试将生命所呈现的改变，加以平衡的过程中，所学到的教训。这轮盘不断在转动，对于轮盘上的某种状态或某个时刻，你可能会喜欢、可能会不喜欢，然而它都会过去，因为生命本就变化无常。你可能会很享受某个特别的时光，并希望它能持续下去。不过，在怎么样，事情总是会改变的。\n\r\n\r牌面上命运之轮上面是象征天使的斯芬克斯，下面是魔鬼，四周围绕着象征命运中的各种境遇的女神、天鹅、毒蛇等。你的命运有如那命运之轮在塔罗牌中不停的转动，时而好时而坏，这是 一种公平的循环。命运之轮也许会在你喜欢的角度停下来，这使你有不可思议的好运气；而它也会在你不喜欢的角度停下，你就会倒霉。不管你愿意与否，命运就是如此无情，况且生命本身就是处在不断的变化之中，这就使你的生命中充满了挑战和刺激。',
        jieshi: '幸运、好时机到来、非富即贵、善于随机应变、有望升职、命中注定的相逢、一见钟情、婚姻幸福\n\r\n\r当牌面正立时，你会发现以前所付出的无谓努力，现在反而成了你前进的动力，先前的付出终于有了回报。命运之轮是由命运女神转动的，所以你俩之前的风风雨雨都将过去，关系将进入稳定的发展阶段。',
        jieshi2: '劣势、时机不好、生活困苦、毫无头绪、情况恶化、工作易出错、停止前进、失恋、恋情短暂\n\r\n\r当牌面倒立时，命运之轮正转到了你人生最低迷的时刻，也许你有些无法接受，但是若能以平常心来看待，这无疑是你成长的最好时机，需要认真面对。感情方面所受到的挫折近乎让你崩溃，然而你还在不断努力。虽然现在你面前是无数的荆棘，但坚持过去将是平坦的大道。',
        liangxing: '命运之轮暗示一个两性关系日趋圆满的机会或可能性在增加。时，解释为：改善情况的机会越来越近了。我的顾客说出一件事情来证实这个论点：他的伴侣即将要完成她的医学学位，如此他们就可以去旅行，而且今后也可以拥有更好的生活品质。',
      },


      {
        src: 'https://img.jogiter.cn/third/justice.png',
        name: '正义',
        biaoqian: '诚实、负责、公正、坦荡',
        paimian: '正义 JUSTICE 代表结果的出现、诚实、负责任。也代表成功处理某项难题。 逆位的代表相互职责，无休止的争议或诉讼。正义意味，这是一段你为你的人生决定负起责任的时光。\n\r\n\r一个女人端坐于石椅上，背后两根石柱。右手握着一把剑端朝上的剑，左手拿着一副天平，暗示她能够识破现实的假象，而理解时间的真正原因或共同的正义。\n\r\n\r正义牌的挑战即是做出公平而正当的决定。正放的剑展示出其两面刀刃，代表对生命的二元性的理解，以及你应该为目前的境遇负起应付的责任。\n\r\n\r牌面描绘着冷酷的正义女神端坐在石椅上，右手拿着一柄正义之剑，左手拿着一架辨识善恶天平。凭借这两样圣器正义女神能轻易地了解事情的来龙去脉与未来的发展，让她轻松面对眼前的 一切。同时也让世人知道因果循环的道理，警告人们要有宽容的心胸，遵守道德，坚持正义。',
        jieshi: '公正、中立、诚实、心胸坦荡、表里如一、身兼二职、追求合理化、协调者、与法律有关、光明正大的交往、感情和睦\n\r\n\r当牌面正立时，事业上你不会有其它太多的感觉，只是按照以前的计划认真地执行。你对感情生活相当满意，对于你的选择对方都是接受的态度',
        jieshi2: '失衡、偏见、纷扰、诉讼、独断专行、问心有愧、无法两全、表里不一、男女性格不合、情感波折、无视社会道德的恋情\n\r\n\r当牌面倒立时，长时间的压抑使你在事业最关键的时刻倒下了，需要认真修整一番才能再次前进。感情上你一直忍让着，然而这次你却爆发了，开始指责对方的不是，你们的感情将会有很大的波折。',
        liangxing: '它也可能意味着你已经解决了和伴侣之间的争议，或你对伴侣以及两性关系，有一种完全诚实和负责化的态度。\n\r\n\r它代表你应该对自己，以及周遭的人绝对的诚实。你应该自己，以及使你成为今天这个样子的种种决定负起责任。你的未来可能会因为你目前的决定、行为或理解而改变。',
      },


      {
        src: 'https://img.jogiter.cn/third/hangedman.png',
        name: '倒吊人',
        biaoqian: '顺从、被动、反省、平静',
        paimian: '倒吊人 HANGED MAN 代表顺从环境，静静得等待命运的安排，也可以代表一段反省的时光。逆位的代表受到约束却拼命想得到自由，可惜时机未到，仍需忍耐。\n\r\n\r“以将有更美好的事物降临于你身上的信念，顺从于人生”是倒吊人这张牌所传达的讯息。\n\r\n\r牌上这个人被绑了起来，不过倒颇沉着、顺从而坚忍。他双手被置于背后，头的周围有一圈清晰可见的光环（或力场）。红色象征持久力，黄色是智力上的理解，而蓝色则代表清晰的思绪及平静的外表。\n\r\n\r这张牌象征自我牺牲，牌面描绘的是一个双手反绑，被倒吊起来的勇士，他头上已经出现了隐约的天使光环。尽管旁人认为这无比痛苦，他却一脸的安详，因为他知道自己是为别人而牺牲， 即使他的肉体毁灭了，但他的精神将永存。\n\r\n\r这张牌告诉我们，再糟糕的境遇也不过是对我们的一种磨练，厄运总会过去。正如传说中的凤凰涅磐，又如北欧神话中的奥丁献身于绞架才学会魔法、文字、咒语以及诗歌。忍耐眼前的厄运，接受命运的安排，好好反省过去的得失，为将来的再度崛起储备力量，才是最重要的。',
        jieshi: '接受考验、行动受限、牺牲、不畏艰辛、不受利诱、有失必有得、吸取经验教训、浴火重生、广泛学习、奉献的爱\n\r\n\r当牌面正立时，你的事业会有短暂的停顿，但你很清楚其中的原因，再次确认自己的目标，做好出发的准备。感情上同样需要反省的时间，你对爱情的牺牲对会给对方很大的触动，也会成为你们关系发展的催化剂。',
        jieshi2: '无谓的牺牲、骨折、厄运、不够努力、处于劣势、任性、利己主义者、缺乏耐心、受惩罚、逃避爱情、没有结果的恋情\n\r\n\r当牌面倒立时，事业上缺乏远见，迷失了努力的目标。感情上你没有了为对方付出的念头，而对方对你的态度依旧，这使你更想逃避。你已经忽略了内心深处正确的判断力，这让你开始遇到很多失败。',
        liangxing: '在两性关系分析当中，倒吊人代表一段反省的时光。或许你正从一个两性关系的日常生活中抽力出来，以反省你的精神方向，以及两性关系的方向。\n\r\n\r内在的和平及宁静会伴随着这张牌而来，虽然你的伴侣可能会发现，很难在情感或社交上与此刻的你接近。这段时间你会把注意力集中在自己，而非伴侣身上。这可能是要求你周遭的人多谅解，及付出耐心了。\n\r\n\r在阿伦到山上进行为期十天的冥想之前，他得牌面上出现了倒吊人这张牌。这项静坐打禅的课程，让他有很多的事件来反省自己、人生，以及亲密关系。',
      },


      {
        src: 'https://img.jogiter.cn/third/death.png',
        name: '死神',
        biaoqian: '磨砺、转生、巨变',
        paimian: '接受眼前的事实，放弃一些到手的利益，你还可以得到更优厚的回报，正所谓“置之死地而后生”，经过磨难成功将更伟大。\n\r\n\r死神 DEATH 代表改变，死神牌意味某种状况的结束。某个阶段的结束，去试试接纳它，迎接新的阶段来临。 逆位的代表恐惧改变，也可能抗阻着它。\n\r\n\r在悬吊者这张牌中，你因为可能必须放弃某些洞悉而产生的恐怖，现在在死神牌中被正当化了。这张牌代表扫除掉旧有的事物，以便拥有更多的空间容纳新事物——新的信念、新的阶段、新的机会以及新的理解。如果没有死亡，就不可能有任何新事物出现于这世界上。生命就是出生与死亡的无穷循环。其中有些部分，你可以轻易的接受，有些部分则需要去调适。\n\r\n\r如果你能够接受死亡，你便能够获得更充实。\n\r\n\r死亡为旧事物画上休止符，并让路给新事物。死亡牌代表改变的一段其间。我们可以这样说，生命中的某个章节就要结束了，而你对这份改变的接纳，将是变化自然而然地发生。',
        jieshi: '失败、接近毁灭、生病、失业、维持停滞状态、持续的损害、交易停止、枯燥的生活、别离、重新开始、双方有很深的鸿沟、恋情终止\n\r\n\r当牌面正立时，事业上你将放弃一些得到的利益，并获得全新的发展机会。在感情上，你将会发生深刻的变化，将开始新的阶段，接受事实你们会有更加美好的旅程。',
        jieshi2: '抱有一线希望、起死回生、回心转意、摆脱低迷状态、挽回名誉、身体康复、突然改变计划、逃避现实、斩断情丝、与旧情人相逢\n\r\n\r当牌面倒立时，事业上你在试图“两全其美”，希望能够发生奇迹。在感情上，对方已经接受了改变，而你却在逃避现实，你俩的距离正在越来越大。',
        liangxing: '死亡牌象征一个两性关系即将发生深刻的改变，或是你对两性关系的态度即将发生深刻的改变。它可能是一段关系的结束，譬如某种分别，或关系中某个阶段的结束，譬如宝宝的诞生。\n\r\n\r死亡牌也可以形容一个天蝎座的人，尤其是和任何的圣杯宫廷牌一起出现时。',
      },



      {
        src: 'https://img.jogiter.cn/third/temperance.png',
        name: '节制',
        biaoqian: '融合、平行、调和、单纯',
        paimian: '节制 TEMPERANCE 代表旅行，教学，行动及感情的融合，带来内心的平静感觉。也代表平行，包括现实与潜意识的融合，感性与理性的调和。逆位的节制代表过度沉迷欲望，金钱物质，缺乏目标\n\r\n\r牌面描述的是天使双手拿着两只圣杯，它们分别代表“物质”和“精神”，她在不停地用圣杯相互倒水，试图使两只圣杯的水保持平衡。它告诫我们当面对各种各样的诱惑时，控制好自己的 欲望是最重要的。它不象其它牌一样有着快乐和成功，让我们感到种平淡的美，毕竟平淡的生活才是真正的幸福。\n\r\n\r它还代表人的能力是由掌握的知识与对知识的理解共同组成的，做任何事情都要有目的，通过这些事情让我们成熟，事业得到发展。',
        jieshi: '单纯、调整、平顺、互惠互利、好感转为爱意、纯爱、深爱\n\r\n\r当牌面正立时，你在事业上小心翼翼，因为处事理智让你的同事感到十分放心。目前你们的感情简简单单，一切都是这么的单纯、平静，正是因为彼此的沟通才让这段感情之路如此通畅。',
        jieshi2: '消耗、下降、疲劳、损失、不安、不融洽、爱情的配合度不佳\n\r\n\r当牌面倒立时，在事业上，你陷入了朝令夕改的怪圈，不妨效仿一下愚人勇往直前，或许能够取得更大的成功。感情上彼此虽然还在不断尝试着沟通，但每次之后总是感觉没有收获，正因为如此你们之间的距离才会越拉越大。',
        liangxing: '节制牌暗示一个会发生重大成长与学习的两性关系。强烈的目的感，是每位伴侣都能以忠实于自己的方式行事，因为它们连接了潜意识（那一池水）以及真实或有形的世界（陆地）。\n\r\n\r它可能象征着和两性关系有关的旅游，或是一个卷进两性关系中的射手座的人。它也暗示着在一个两性关系内，激情和灵性的和谐融合。',
      },


      {
        src: 'https://img.jogiter.cn/third/devil.png',
        name: '魔鬼',
        biaoqian: '物欲、沉迷、困扰、支配',
        paimian: '恶魔 THE DEVIL 代表野心支配了心灵。魔鬼牌描述的是一种对生命物质化的观点。沉迷物质享受，缺乏心灵支柱。 逆位的代表在寻找打破束缚的方法找寻新出路\n\r\n\r魔鬼牌代表一种错误的概念，认为事情别无选择。觉得“我所拥有的就是这些”或“这是我唯一的选择”。在宗教的前因后果当中，魔鬼引诱男人使它遗忘掉精神的探索，以及他的神圣目的。当男人看不见他真正的目的时，生活所提供给他的欢乐就会具有意义，因为“你只能活一次”。\n\r\n\r牌面中，恶魔看着被铁链束缚的奴隶，发出得意的狞笑。尽管奴隶们被铁链捆着，但只要他们互相帮助就可以摆脱恶魔，但他们已经被恶魔的诱惑蒙住了双眼，心甘情愿被其驱使，仔细看他们已经长出了和恶魔一样的犄角和尾巴。\n\r\n\r狰狞可怕的恶魔却有着如此动听的声音，他用金钱和所谓的安全引诱人们成为他的奴隶。人们在他的控制下失去了互相沟通的能力，占据心灵的完全是赤裸裸的原始欲望。为了追求金钱，否认生命中其它任何目标，人都变得自私和贪婪，可当生命结束时，这些物质就不再具有任何意义了。\n\r\n\r恶魔代表一种错误的观念——拥有物质财富就拥有了一切。外在的干扰让人的冲动支配着理智，自我的精神上的要求不断消失，开始不愿意为自己的行为负责，因为他们可以把一切过错都推给恶魔。这也可以看作是事业的成功，因为你的最终目标就是金钱。',
        jieshi: '被束缚、堕落、生病、恶意、屈服、欲望的俘虏、不可抗拒的诱惑、颓废的生活、举债度日、不可告人的秘密、私密恋情\n\r\n\r当牌面正立时，你将在事业中得到相当大的名声与财富，你心中的事业就是一切，财富就是你的目标。感情上你们开始被彼此束缚，却不希望改善这种关系，情愿忍受彼此的牵连和不满。',
        jieshi2: '逃离拘束、解除困扰、治愈病痛、告别过去、暂停、别离、拒绝诱惑、舍弃私欲、别离时刻、爱恨交加的恋情\n\r\n\r当牌面倒立时，事业上理性开始支配欲望，找到真正值得努力的目标。感情上开始尝试与对方进行沟通，这让你俩的感情更加牢固。',
        liangxing: '在两性关系分析中，魔鬼可能是描述一份由爱开始的两性关系，结果却变成一种束缚。习惯、公式化和实际性，已经奴役了关系中人的心。它也可能象征你被欲望或惯性所支配，而非依循你更佳的判断行事。\n\r\n\r这张牌意味接受一种坏的状态，对于那些役使你的事物不作丝毫的抵抗，或甚至不愿意做改变。它暗示你紧守着“反正还有许多人的情况比我更糟”的信念。通常这是真的，然而这只是你恋战于某种状态的藉口，无法提供你任何学习、成长或快乐的机会。\n\r\n\r有时候魔鬼牌是指一段建立在嫉妒或强烈控制欲之上的两性关系。它可能意味着纵欲，或只是为了性爱的理由而维系一段关系，换句话说，你已经不喜欢你的伴侣，性和感情或你内在的自我无关，你也无所谓。',
      },


      {
        src: 'https://img.jogiter.cn/third/tower.png',
        name: '高塔',
        biaoqian: '突变、破裂、坍塌',
        paimian: '塔 THE TOWER 代表突变，生命中无可避免的改变，暗示某种结构模式无法继续存在，要做出改变。 逆位的代表你抗拒这种改变，但却不觉醒，这是越抗拒，越存在。\n\r\n\r高塔是代表一种虚假的结构，或不合适的价值。你对人生的态度已经没有办法再支持你，你需要舍弃这些东西才得以成长。这个足以对人生产生新的理解的态度，其灵感有可能是来自乍显的灵光。\n\r\n\r高塔将为你现实你的选择机会，或是强迫你去面对它们，以这种方式带领你远离魔鬼的压迫。它带领你进入所期盼，而在魔鬼牌当中所恐惧着的改变。\n\r\n\r这张牌是惟一一张没有好的意味的大阿卡纳，牌面描绘的是一座高耸入云的塔被闪电击毁了，两个人从坍塌中的高塔上跌落到地面上。突然而又不可预料的强烈变化让人无法接受，再高傲的人类也无法与自然的强大相提并论，挑战自然只会引来神的怒火。\n\r\n\r尽管这巨大的变化无法让你适应，但这却是在教导你成长，尝试着接受它，它会让你在接下来的时间里走得更轻松。接受对手强大的事实确实有些困难，但务实的面对它，用理性的方式解决它也是个巨大的进步。',
        jieshi: '破产、逆境、被开除、急病、致命的打击、巨大的变动、受牵连、信念崩溃、玩火自焚、纷扰不断、突然分离，破灭的爱\n\r\n\r当牌面正立时，事业上的困难显而易见，回避不是办法，要勇于挑战，尽管它貌似强大。在感情方面，突然的改变让你陷入深深的痛苦中，接受改变可以让你或你们双方在未来的人生旅途中走得更好。',
        jieshi2: '困境、内讧、紧迫的状态、状况不佳、趋于稳定、骄傲自大将付出代价、背水一战、分离的预感、爱情危机\n\r\n\r当牌面倒立时，事业上开始有稳定的迹象，你不要盲目抵抗改变的发生，这只会导致更大的改变，无论你如何抵抗，改变终究会发生。在感情上双方的情绪终于平静下来，虽然沟通上还有些困难，但不会有太大的变化了，也许你做些让步，会让你们的感情更融洽。',
        liangxing: '高塔牌是形容两性关系中发生了突如其来的改变或解体。它暗示某种结构或模式已经没有办法继续地存在，发生突然的改变是为了让你能再次成长。',
      },


      {
        src: 'https://img.jogiter.cn/third/star.png',
        name: '星星',
        biaoqian: '沉静、希望、温柔、和平',
        paimian: '星星牌意味创造力和对生命的可能性的信心。星星 THE STAR 代表信心希望及和平，经历变动后的平静，拥有了自由寻回自己及真正未来。逆位代表空虚，寂寞和失去信心。\n\r\n\r经历高塔的变动之后，现在已进入宁静状态。星星是一张代表对自己及对人生的各种可能性深具信心的牌。在经历一番情感的动乱之后，一种和平及空虚的感觉随即回来。这并不是一种负面的空虚感，而是没什么特别的事情需要去担心或解决。在高塔中经常发现的迫切感，如今已被一种沉静、和平的感觉所取代了。\n\r\n\r这是一张充满希望的牌。在希望之星——天狼星的照耀下，希望女神把圣水瓶中的希望圣水倒入象征潜意识的水池中。她知道人们是如此地需要希望，所以当一瓶圣水倒完时，她又在倒另一瓶。只要有希望人们才能有足够的动力去完成许多事，所以说希望就是人类的活力之源。\n\r\n\r让我们奉献出所有的爱，尽管是在黑夜但漫天的星星给我们指引方向，在星光的指引下走向光明的未来。星星的含义中还有一点是很容易被忽略的，这就是“怀孕”的意思。',
        jieshi: '前途光明、充满希望、想象力、创造力、幻想、满足愿望、水准提高、理想的对象、美好的恋情\n\r\n\r当牌面正立时，代表当你在事业上得到希望的能量时，前途会无比光明。在感情方面，你对自己很有信心，对两人的关系也抱有乐观的态度，相信自己能把握主动权，并努力追求对方，你们很可能就是命中注定的那一对。',
        jieshi2: '挫折、失望、好高骛远、异想天开、仓皇失措、事与愿违、工作不顺心、情况悲观、秘密恋情、缺少爱的生活\n\r\n\r当牌面倒立时，在事业上，你不要全部依靠别人的给予，因为你还有希望在心中燃烧，只有靠自己才有真正的发展动力。感情方面你俩无法彼此信任，感觉无法把自己托付给对方，也许你们退一步，都冷静一下就能找出解决问题的途径，因为答案就在你们的心中。',
        liangxing: '星星暗示你对这个关系有信心，相信事物都会是乐观的。你有足够的自由和空间，来实现你自己的命运，而且处于一种爱的关系中。星星可能是在形容一种对加强潜意识及意识世界之联系有帮助的两性关系。换句话说，在一个提供支持和自由的两性关系中，你可以生活在你的真理中，或做真正的自己。\n\r\n\r这张牌可能是暗示和伴侣一起度假，或在结伴关系中，你拥有自主的空间和地位。因果循环也是这张牌的隐喻，所以你们很可能是命中注定要在一起的，或注定要经历在这段关系中，将显现的种种事件。',
      },

      {
        src: 'https://img.jogiter.cn/third/moon.png',
        name: '月亮',
        biaoqian: '暗流、迷茫、不安、动摇',
        paimian: '月亮象征倾听你的梦，以找到内心世界的平静。月亮 THE MOON 暗示要面对恐惧，也正阻碍着你去做某些事情。逆位的代表存在内心的恐惧或是尚未解决的问题开始显示出来，找寻星的力量去克服吧。\n\r\n\r在月亮这张牌中，有一只狗和一只狼对着月亮吠叫，因为水池里面出现了一只小龙虾。有一条小径从水池通往远处，穿过两座塔之间通向山上。这里的挑战就是要从水池边沿着道路走，而不怕被狗和狼所引起的恐惧击倒。这些动物代表你的较低层次、动物的本性，以及你对未知或尚未充分理解之事物的恐惧感。\n\r\n\r这是张代表迷惑和不安的牌。在月光下龙虾从水中爬出，向月亮女神走去，它要选择远方的两座高塔中正确的一座，因为那座高塔是觐见月亮女神唯一途径。岸上的狼和猎狗因为同样被月亮 女神吸引着，暂时没有发觉近在咫尺的龙虾。狗代表着小龙虾对旧世界的依赖，而狼代表着小龙虾的恐惧。\n\r\n\r月亮是与精神世界的桥梁，月赢月亏象征着转变，当满月出现时，人们知道它马上就要亏损了，心中的不安油然而生。月亮越大就意味着离变小越近，在幸福时担心不幸的到来，使人们有不能有任何的懈怠感。',
        jieshi: '不安、迷惑、动摇、谎言、欺骗、鬼迷心窍、动荡的爱、三角关系\n\r\n\r当牌面正立时，在事业上，你可能有些不满足，希望能够把自己内在的力量全使出来，于是你开始想要晚上的时间。感情方面，你很敏感害怕被伤害，尽管有伴侣的承诺，你仍然犹豫不决，甚至有逃避的想法。',
        jieshi2: '逃脱骗局、解除误会、状况好转、预知危险、等待、正视爱情的裂缝\n\r\n\r当牌面倒立时，在事业上，你因为外界的压力开始退缩了，并对自己的既定目标产生了怀疑。在感情上，你们之间的问题开始浮现，虽然有些痛，但是只要共同面对存在的困难，问题就解决一半了。',
        liangxing: '在两性关系分析当中，月亮代表表面上一切事情都很美好，但是底层却波涛汹涌——在日常生活中一切都圆满和谐，但是暗地里确存在着某些没有被讨论，被认知或尚未解决的事情。或许你对于更深刻的承诺怀有某种恐惧，或你想要离开这段关系，然而恐惧却又把你拉了回来。你的伴侣或许会令你回想起过去的两性关系，或父母关系中尚未解决的事情。事情不能光看表面，如果你愿意倾听你的梦境或潜意识，或许你就能发现你内心深处到底真正发生了什么事。',
      },

      {
        src: 'https://img.jogiter.cn/third/sun.png',
        name: '太阳',
        biaoqian: '欢乐、光明、幸福、创意',
        paimian: '太阳象征欢乐、内在的平和，以及表达自我的需求。它也代表理解到幸福是一种选择。\n\r\n\r太阳 THE SUN 代表欢乐，和平，幸福及创意。也有解放自己和自由。 逆位的代表心中仍存在恐惧产生不安。\n\r\n\r太阳代表一种令人愉悦的解脱。它表示觉醒的力量足以驱逐黑暗。它代表一种表达内在无意识和潜意识力量的天赋趋力。它是充满希望、理想主义，以天真率直的。\n\r\n\r这张牌代表在太阳底下，所有事情都是明晰、乐观及欢乐的一段时间。现在所有事物都清晰可见，也没有在月亮中所经历的恐惧行迹。太阳意味对人生深入的理解，但又能够从浅显简单的事物中获得满足。它显示一种活跃、有创造性、精力充沛的状态，小孩子们能够自然体验到的一种状态。\n\r\n\r这是大阿卡纳中最好的一张牌，它象征知识与活力。牌面中一个小孩骑着一匹马在歌颂着太阳带来的生命力，接受着太阳赋予他的能量。太阳的力量如此强大，它给世间万物以生命，它的光 芒如此温暖，所有的生命都为之感动。它的力量完全是正面的，充满希望和理想，任何黑暗都抵挡不住它的光芒。',
        jieshi: '活跃、丰富的生命力、充满生机、精力充沛、工作顺利、贵人相助、幸福的婚姻、健康的交际\n\r\n\r当牌面正立时，事业上会有贵人相助，将会有更好的发展机遇。在感情方面，你们已经走出坎坷的感情之路，前面将是洒满歌声和欢乐的坦途，你们将开始规划未来的生活。',
        jieshi2: '消沉、体力不佳、缺乏连续性、意气消沉、生活不安、人际关系不好、感情波动、离婚\n\r\n\r当牌面倒立时，你在事业上竞争心太急切了，把对手都吓跑了，然而也让合作伙伴感到害怕，或许你该放松些。感情上两人间出现一些小变化，开始在乎对方的态度和自己的付出，这些怀疑也许都是没必要的。',
        liangxing: '太阳所描绘的是一种既有创意、又饶富趣味的两性关系，在日常生活中随时可以见孩子般的天真和童趣。我认识一个男人，他花了很多时间想一些花样来告诉伴侣，他是如何的珍视她。从在冰箱里放一张爱的短笺，到在厨房的地板上排成一棵大的心型图案；从在起居室窗帘的褶缝里绑的小缎带，到在她的拖鞋里放两张她最爱的芭蕾舞票，，好让她在一大早起床时便发现。\n\r\n\r这对佳偶一起玩着各式游戏，他们也洞悉在爱的关系中友谊的价值。太阳是一张能够共享生活中单纯乐趣的牌，但是他们对人生依然有着深刻的了解，并指导他们拥有一个深远的目的，无论在何时，这世界都会同心协力的支持他们，帮助他们完成它。',
      },
      {
        src: 'https://img.jogiter.cn/third/judgement.png',
        name: '审判',
        biaoqian: '成长、因果、清晰、救赎',
        paimian: '审判 JUDGEMENT 代表清晰的判断，了解自己。 逆位的代表用消极的方法去填补内心的空虚，忽略内心的呼唤。\n\r\n\r在审判牌中，天使在最后的审判上吹奏这小喇叭，而人们则从他们的墓穴中站起来欢庆。一面白底有红十字图形的旗子在飘扬着。每个男人、女人和小孩都向上仰望着精神，因为这是他们返回上帝或造物主家园的道路。\n\r\n\r牌面上描绘的是天使吹起号角，让听到这音乐的死者得到救赎。天使的号角可以唤醒所有人的情感，即使是忏悔过的罪人也有到达天堂的希望。天使的号音象征着旧观念已经死亡，人们正在音乐的召唤下拥抱新世界。解牌时要注意决断和复原。\n\r\n\r你也在总结整理过去的经验，丢弃错误留下宝贵的知识。在新世界的开始，你将发现你自己并不是孤独的，有很多朋友和你一起学习，尽管你们素昧平生，但圣堂天使让你们彼此互助，这使你们的生活更加愉快。',
        jieshi: '复活的喜悦、康复、坦白、好消息、好运气、初露锋芒、复苏的爱、重逢、爱的奇迹\n\r\n\r当牌面正立时，事业上你超越了自我，在过去努力的基础上取得了成功。感情上双方都在认真学习和成长，虽然表面上的变化并不大，但内在的改变已经很大了。',
        jieshi2: '一蹶不振、幻灭、隐瞒、坏消息、无法决定、缺少目标、没有进展、消除、恋恋不舍\n\r\n\r当牌面倒立时，在事业上缺乏清晰的判断，试图用物质填充精神的空虚。在感情上，不断地回忆着过去的美好时光，不愿意去正视目前的问题，你们的关系已经是貌合神离了。',
        liangxing: '审判牌暗示这个两性关系提供了重要的精神成长和学习。你目前的关系当中包含了因果循环的课题或回报，我再说一次，你现在所拥有的正式你过去所曾播下的种，或曾做过的努力的产物。\n\r\n\r这段关系是过去所作所为的产物，而且它能激励你认识自己、你的模式或你生命的目的。检视你在这段关系中的收成，这么做的话，你就可以知道是哪些行为产生了这些结果。你目前所有的一切并非偶然。\n\r\n\r审判出现时，表面上并没有什么明显的改变，然而表面下的改变却甚多。',
      },
      {
        src: 'https://img.jogiter.cn/third/world.png',
        name: '世界',
        biaoqian: '成功、永久、和谐、共荣',
        paimian: '世界描述一种来自内心的快乐。它也可能暗示持久的成功。世界 THE WORLD 象征永久和成功新时代的确立。 逆位代表判断模糊不清，掌握不到机会。\n\r\n\r世界是一张象征永久和持续成功的牌。你的灵魂和世界或宇宙的灵魂处于协调状态，而当两者之间存在着和谐时，所有的事情都是可能的。愚人头上的圆圈，现在环绕着世界牌中的人，而且她也清楚地知道并没有所谓的开始和结束，因为所有的事情都是环环相扣的。\n\r\n\r是一张象征永久和持续成功的牌。你已经到达了成功之门的前方，成功女神让你耐心等待，她会让你进入成功之门的，只不过是时间问题罢了。成功之门周围是你经历过的幸福与哀伤，成功与失败，在到达乐土之前回忆一下过去的时光是很有必要的。这张牌暗示只要你拥有一颗感恩的心，就必能在你为自己打造的美丽世界中，寻找到幸福与快乐。\n\r\n\r牌的本意是“达成”，它告诉我们所有的事情都可以达成，所有的梦想都可以成为现实，没有不可能得到的事物。只要有耕耘，就能有相应的收获。',
        jieshi: '完成、成功、完美无缺、连续不断、精神亢奋、拥有毕生奋斗的目标、完成使命、幸运降临、快乐的结束、模范情侣\n\r\n\r这张牌正立时，在事业上因为努力工作，所以回报丰厚。感情上，你们在彼此的承诺中持续着美好的关系。',
        jieshi2: '未完成、失败、准备不足、盲目接受、一时不顺利、半途而废、精神颓废、饱和状态、合谋、态度不够融洽、感情受挫\n\r\n\r这张牌倒立时，在事业的路上有巨大的障碍，你精神不振，丧失了挑战的动力。感情上，你们不再重视承诺，只是盲目接受对方。彼此最好能沟通一下，不要让痛苦继续纠缠着你们。',
        liangxing: '世界象征两性关系当中美好而持续的事物。它显示你正处于一种共荣的两性关系中。你和伴侣能够在你们所同意的范围内完全的成长、发展和生活\n\r\n\r这份关系中存在相当强大的驱动力，这可不是一段可以等闲视之或轻忽的关系。如果它是在过去的位置，可能意味着一个住在另一个地方的伴侣，或你到另一个地方旅行时，可能会遇到某个人。',
      },





    ],


    src: "",
    name: '',
    weizhi: "",
    biaoqian: '',
    paimian: '',
    jieshi: '',
    liangxing: '',
    jieshi2: '',








  },

  /**
   * 生命周期函数--监听页面加载
   options.random
   */
  onLoad: function(options) {

    console.log(options);
    var op = options.random || 0;

    var weizhi;
    var titleplus;
    if (options.weizhi == 0) {
      weizhi = true;
      titleplus = '·正位'
    } else {
      weizhi = false;
      titleplus = '·逆位'

    }


    this.setData({
        src: this.data.array[op].src,
        name: this.data.array[op].name + titleplus,
        weizhi: this.data.array[op].weizhi,
        biaoqian: this.data.array[op].biaoqian,
        paimian: this.data.array[op].paimian,
        jieshi: this.data.array[op].jieshi,
        liangxing: this.data.array[op].liangxing,
        jieshi2: this.data.array[op].jieshi2,
        weizhi: weizhi,
      },
      function() {
        console.log(this.data.weizhi)
      });



  },

  share:function(){

    this.setData({
      share:true,
    })



  },

  onShareAppMessage:function(){
    return {
        title: '塔罗占卜运程，两性关系解读，快来抽卡吧~',
        path:'/pages/index/index',

      }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */

})
