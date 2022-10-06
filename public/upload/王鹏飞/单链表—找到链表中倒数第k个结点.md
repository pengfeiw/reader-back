# 求链表中倒数第K个结点

### 一.单向链表
[维基百科中国](https://zh.wikipedia.org/wiki/%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8)是这样描述的：

> 单向链表（又名单链表、线性链表）是链表的一种，其特点是链表的链接方向是单向的，对链表的访问要通过从头部开始，依序往下读取。

从描述中，我们能知道单向链表的方向是单一的，也就是我们只能从第一个结点索引到第二个结点，无法从第二个结点索引到第一个结点。单链表在内存中是一组地址任意的存储单元，与数组不同，单链表是通过指针索引，每个结点除了存储当前结点的值，还会存储下一个结点的指针，尾结点的指针为空。
![单链表](https://cdn.jsdelivr.net/gh/pengfeiw/PengfeiBlog@1.0.2/image/3.jpg)


### 二.分析
因为单链表访问顺序是单向的，所以如果是求第K个结点，我们只要从头开始每次指针向右移动一个位置，移动K-1次，就能找到第K个结点。但是题目是倒数第K个。

留给大家一点思考的时间......

...............................................

..............................................

相信大家都已经知道方法了，没错很简单，就是利用双指针的思路。
1. 两个指针开始都位于0位置。
2. 将第二个指针移动到K-1的位置。
3. 然后两个指针同时移动，直到最后一个指针移动到链表的尾结点，此时第一个指针正好指在第K个结点。

方法很简单，但是要提醒的是要注意判断一些临界条件，考虑K是否超出链表的长度。否则写出来的代码没有鲁棒性。

### 三.解题
通过上面的分析，我们很容易写出下面的代码。代码采用typescript写的。

```typescript

/**
 * 找到单链表中倒数第k个结点。
 * 本例子采用的是数字链表，实际上可以是存储任意类型的值。
 */
// 链表的结点类
class ListNode {
    public value: number | null;
    public next: ListNode | null;
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
// 创建一个链表
const createLinkList = (values: number[]) => {
    const head = new ListNode(null, null);
    let preNode = head;
    for (let i = 0; i < values.length; i++) {
        const currentNode = new ListNode(values[i], null);
        preNode.next = currentNode;
        preNode = currentNode;
    }
    return head;
};
// 获得倒数第k个值
const getKthFromLast = (k: number, linkHead: ListNode) => {
    if (k < 1) throw new Error("k值必须大于0");
    // 开始时p1和p2都指向head结点
    let p1 = linkHead, p2 = linkHead;
    // 先将p2移动到k-1的位置
    for (let i = 0; i < k - 1; i++) {
        if (p2.next !== null) {
            p2 = p2.next;     
        } else {
            return null;
        }
    }
    // 同时移动k1和k2,直到p2移动到尾结点
    while (p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1.value;
};
// 测试
const linkList1 = createLinkList([1, 2, 3, 4, 5, 6]);
const linkList2 = createLinkList([-1, -3, -10, 10, -1, 3]);
const linkList3 = createLinkList([]);
console.log(getKthFromLast(1, linkList1));
console.log(getKthFromLast(2, linkList1));
console.log(getKthFromLast(6, linkList1));
console.log(getKthFromLast(7, linkList1));
console.log(getKthFromLast(1, linkList2));
console.log(getKthFromLast(6, linkList2));
console.log(getKthFromLast(8, linkList2));
console.log(getKthFromLast(1, linkList3));
console.log(getKthFromLast(-1, linkList3));
```

测试结果如下：
![](https://cdn.jsdelivr.net/gh/pengfeiw/PengfeiBlog@1.0.2/image/4.jpg)

如有不正确或者遗漏的地方欢迎指出。

[github地址](https://github.com/pengfeiw/blog-algorithm/tree/master/%EF%BC%88%E5%8D%95%E9%93%BE%E8%A1%A8%EF%BC%89%E6%89%BE%E5%88%B0%E9%93%BE%E8%A1%A8%E4%B8%AD%E5%80%92%E6%95%B0%E7%AC%ACk%E4%B8%AA%E7%BB%93%E7%82%B9)