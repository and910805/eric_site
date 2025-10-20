export interface BlogPost {
  title: string;
  platform: string;
  description: string;
  url: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "IT 鐵人賽｜資安專職的攻防旅程",
    platform: "iThome 鐵人賽",
    description:
      "今年的 IT 鐵人賽記錄了我在資安專責職務上的觀察與實作心得，歡迎一起追劇般地看完 30 天的系列文章。",
    url: "https://ithelp.ithome.com.tw/users/20171891/ironman/8352",
    publishedAt: "2025-09-01",
  },
  {
    title: "資安筆記與技術整理",
    platform: "HackMD",
    description:
      "將平時整理的筆記、演講教材與攻防演練紀錄集中在 HackMD，作為與社群分享的知識庫。",
    url: "https://hackmd.io/@LKanFpXQTUSJayug7EHeiA",
    publishedAt: "2025-01-10",
  },
];
