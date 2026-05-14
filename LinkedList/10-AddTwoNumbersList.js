function Addtwolist(list1, list2) {
  let ans = new ListNode();
  let anshead = ans;
  let carry = 0;
  while(list1 || list2 || carry) {
      let sum = (list1 ? list1.val : 0) + (list2 ? list2.val : 0) + carry;
      carry = Math.floor(sum/10);
      let digit = sum%10;
      let newNode = new ListNode(digit);
      ans.next = newNode;
      ans = ans.next;
      list1 = list1 && list1.next;
      list2 = list2 && list2.next;
  }
      return anshead.next;
}