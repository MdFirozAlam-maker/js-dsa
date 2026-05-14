function MergeTwoSorted(list1,list2) {
  let ans = new ListNode();
  let anshead = ans;
  while(list1 && list2) {
    if(list1.val < list2.val) {
        ans.next = list1;
        list1 = list1.next;
        ans = ans.next;
    }else {
      ans.next = list2;
      list2 = list2.next;
      ans = ans.next;
    }

    
  }

  ans.next = list1 || list2;

  return anshead.next;


}