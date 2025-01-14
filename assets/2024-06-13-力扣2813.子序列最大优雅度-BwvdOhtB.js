import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CBAufN0x.js";import{c as g,w as l,f as y,a as o,p as E,o as m,g as i,h as s,i as F,r as h}from"./app-jlntocY2.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Dt9CYiqC.js";import"./YunCard.vue_vue_type_script_setup_true_lang-D_E3Ul77.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DM1jHRcZ.js";import"./index-CbdwHsnH.js";const b={__name:"2024-06-13-力扣2813.子序列最大优雅度",setup(c,{expose:r}){const k=JSON.parse('{"title":"力扣2813.子序列最大优雅度","description":"","frontmatter":{"layout":"post","title":"力扣2813.子序列最大优雅度","date":"2024-06-13T10:59:24.000Z","excerpt_type":"html","updated":"2024-06-13T00:00:00.000Z","categories":"力扣好题记录","tags":["Java","算法","贪心","力扣"]},"headers":[{"level":2,"title":"力扣2813.子序列最大优雅度","slug":"力扣2813-子序列最大优雅度","link":"#力扣2813-子序列最大优雅度","children":[]}],"relativePath":"pages/posts/2024-06-13-力扣2813.子序列最大优雅度.md","path":"/home/runner/work/re-blog/re-blog/pages/posts/2024-06-13-力扣2813.子序列最大优雅度.md","lastUpdated":1736841681000}'),e=o(),n=k.frontmatter||{};return e.meta.frontmatter=Object.assign(e.meta.frontmatter||{},k.frontmatter||{}),E("pageData",k),E("valaxy:frontmatter",n),globalThis.$frontmatter=n,r({frontmatter:{layout:"post",title:"力扣2813.子序列最大优雅度",date:"2024-06-13T10:59:24.000Z",excerpt_type:"html",updated:"2024-06-13T00:00:00.000Z",categories:"力扣好题记录",tags:["Java","算法","贪心","力扣"]}}),(t,a)=>{const p=d;return m(),g(p,{frontmatter:y(n)},{"main-content-md":l(()=>[a[0]||(a[0]=i("h2",{id:"力扣2813-子序列最大优雅度",tabindex:"-1"},[s("力扣2813.子序列最大优雅度 "),i("a",{class:"header-anchor",href:"#力扣2813-子序列最大优雅度","aria-label":'Permalink to "力扣2813.子序列最大优雅度"'},"​")],-1)),a[1]||(a[1]=i("p",null,[i("a",{href:"https://leetcode.cn/problems/maximum-elegance-of-a-k-length-subsequence/solutions/2807350/zi-xu-lie-zui-da-you-ya-du-by-leetcode-s-mw6g/?envType=daily-question&envId=2024-06-13",target:"_blank",rel:"noreferrer"},"2813.子序列最大优雅度")],-1)),a[2]||(a[2]=i("p",null,"有一点思路，但不多。",-1)),F(" more "),a[3]||(a[3]=i("p",null,"不看提示的时候大概能够想到要用贪心，本来想的是先排序，并且时刻维护两个元素，其中第一个元素记录已经重复类别的未选择最大值，第二个元素记录不重复类别的未选择最大值。但是这样选到第k个之后就无法继续选择了。",-1)),a[4]||(a[4]=i("p",null,"看完提示之后对于如何维护这k个元素感到疑惑，还以为是另外建立一个集合来维护。",-1)),a[5]||(a[5]=i("p",null,"于是直接看题解，思路理解如下：",-1)),a[6]||(a[6]=i("ul",null,[i("li",null,[i("p",null,[s("维护已选择的k个元素使用的数据结构是栈，并且栈中仅存储重复了的元素，因为利润较大且不重复的元素一定比之后利润较小且不重复的元素要好，因此仅重复元素有要被删除的可能。此外，在删除元素时，仅需要考虑"),i("strong",null,"重复"),s("且"),i("strong",null,"最小"),s("的那个元素，对于这个元素具体是什么类别无需关心，因此使用一个从栈底到栈顶递减的栈来存储重复了的元素（不包括每个类别的第一个元素），需要删除元素时删除栈顶的元素即可。")])]),i("li",null,[i("p",null,"虽然在存储了前k个元素之后，删除元素并添加新元素可能会导致总结果降低，但是可以每次在替换元素时都存储一次当前结果（如果当前比之前的最大值要更大），因此不需要考虑在替换元素的过程中结果变小了怎么办。")])],-1)),a[7]||(a[7]=i("p",null,"代码：",-1)),a[8]||(a[8]=i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Solution"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," long"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," findMaximumElegance"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[][] "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"items"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," k"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," n "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," items.length;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Arrays."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sort"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(items, (a, b)"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," -"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(a["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"])); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 按照利润值降序排列")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        long"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," total "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        long"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," cat_num "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        long"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ans "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Set<"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Integer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> categories "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," HashSet<>(); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 存储已经出现过的类别")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Deque<"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Integer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> deque "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," LinkedList<>();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"k;i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"            //前k个数，直接入set，如果重复则加入栈中")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"            //每个类别第一次出现的数（最大数）不会入栈，即不会被删除")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(categories."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"contains"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"])"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                categories."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                cat_num "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            else"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                deque."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"offerFirst"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            total "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ans "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," total "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," cat_num"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cat_num;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"k;i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"n;i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"            //接下来的数字，如果类别已经出现过，则不要")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"            //如果类别没有出现过，则替换掉之前一个重复数字，并且计算一次最大值")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(categories."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"contains"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"])){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"                continue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            else"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(deque."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"size"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                categories."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"                int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," minus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," deque."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pollFirst"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                total "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," items[i]["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"minus;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                cat_num "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ans "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Math."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"max"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ans, total "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," cat_num"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cat_num);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ans;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1)),a[9]||(a[9]=i("p",null,[s("时间复杂度："),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mi",null,"O"),i("mo",{stretchy:"false"},"("),i("mi",null,"n"),i("mo",null,"×"),i("mi",null,"l"),i("mi",null,"o"),i("mi",null,"g"),i("mi",null,"n"),i("mo",{stretchy:"false"},")")]),i("annotation",{encoding:"application/x-tex"},"O(n \\times logn)")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),i("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),i("span",{class:"mopen"},"("),i("span",{class:"mord mathnormal"},"n"),i("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),i("span",{class:"mbin"},"×"),i("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),i("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),i("span",{class:"mord mathnormal"},"o"),i("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),i("span",{class:"mord mathnormal"},"n"),i("span",{class:"mclose"},")")])])]),s("，即排序的时间复杂度。排序后仅需要一次遍历即可。")],-1)),a[10]||(a[10]=i("p",null,[s("空间复杂度："),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mi",null,"O"),i("mo",{stretchy:"false"},"("),i("mi",null,"n"),i("mo",{stretchy:"false"},")")]),i("annotation",{encoding:"application/x-tex"},"O(n)")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),i("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),i("span",{class:"mopen"},"("),i("span",{class:"mord mathnormal"},"n"),i("span",{class:"mclose"},")")])])]),s("，当元素全都不重复时的Set所用空间，或者元素全重复时的栈空间。")],-1))]),"main-header":l(()=>[h(t.$slots,"main-header")]),"main-header-after":l(()=>[h(t.$slots,"main-header-after")]),"main-nav":l(()=>[h(t.$slots,"main-nav")]),"main-content":l(()=>[h(t.$slots,"main-content")]),"main-content-after":l(()=>[h(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[h(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[h(t.$slots,"main-nav-after")]),comment:l(()=>[h(t.$slots,"comment")]),footer:l(()=>[h(t.$slots,"footer")]),aside:l(()=>[h(t.$slots,"aside")]),"aside-custom":l(()=>[h(t.$slots,"aside-custom")]),default:l(()=>[h(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{b as default};
