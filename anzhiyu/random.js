var posts=["2025/06/27/Java八股/","2025/06/28/力扣2025_06_28/","2025/06/27/力扣_2025_06_27/","2025/06/26/感谢安知鱼大佬/","2025/06/27/面试记录_2025_6_27/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };