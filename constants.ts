import { ContentText } from './types';

export const CONTENT: Record<'en' | 'jp', ContentText> = {
  en: {
    nav: {
      services: "Why Us",
      team: "Our Team",
      tech: "Technology",
      contact: "Contact",
    },
    hero: {
      headline: "Bridging Vision with Senior-Level Execution",
      subheadline: "We are an elite software development team specializing in Java Microservices and Modern Frontend. Led by bilingual experts (JLPT N1), we deliver Japanese quality standards to enterprise clients.",
      cta: "Start Your Project",
    },
    values: {
      title: "Why Choose Us",
      subtitle: "The perfect blend of technical excellence and cultural alignment.",
      items: [
        {
          title: "Japanese Quality Standards",
          description: "We adhere to the rigorous 'Seiketsukan' approach in code quality, documentation, and testing. Precision is our baseline.",
        },
        {
          title: "N1 Native-Level Communication",
          description: "Our Bridge SEs and BAs hold JLPT N1 certification. We eliminate language barriers and ensure 100% requirement alignment.",
        },
        {
          title: "Senior Expertise Only",
          description: "No juniors. Our team consists exclusively of Senior Architects and Developers with 7+ years of enterprise experience.",
        },
        {
          title: "On-Time Delivery",
          description: "We respect deadlines as absolute commitments. Our agile process is tuned for predictability and transparency.",
        },
      ],
    },
    team: {
      title: "Core Team Composition",
      subtitle: "A balanced unit designed for high-performance delivery.",
      roles: [
        {
          title: "Team Lead & Architect",
          name: "Hiroshi T.",
          desc: "12+ years exp. System Design, Cloud Architecture (AWS/Azure). Ensures scalability and security.",
        },
        {
          title: "Senior Business Analyst",
          name: "Sarah M. (JLPT N1)",
          desc: "The bridge. Native-level fluency in Japanese/English. Translates business needs into technical specs perfectly.",
        },
        {
          title: "Senior Java Developer",
          name: "Kenji R.",
          desc: "Backend Specialist. Spring Boot, Microservices, High-performance API design.",
        },
        {
          title: "Senior Java Developer",
          name: "David L.",
          desc: "Database Expert. SQL optimization, Data integrity, Legacy system migration.",
        },
        {
          title: "Senior Frontend Dev",
          name: "Yuki S.",
          desc: "UI/UX focus. React/Vue expert. Creating pixel-perfect, responsive interfaces.",
        },
        {
          title: "Senior Frontend Dev",
          name: "James K.",
          desc: "State Management expert. Complex SPA architecture, Performance optimization.",
        },
      ],
    },
    tech: {
      title: "Technical Expertise",
      subtitle: "Modern, reliable, and scalable technology stack.",
    },
    contact: {
      title: "Request a Consultation",
      desc: "Discuss your project with our Lead Architect and Business Analyst.",
      form: {
        name: "Company / Name",
        email: "Work Email",
        message: "Project Details",
        submit: "Send Inquiry",
      },
    },
    footer: {
      rights: "All Rights Reserved.",
    },
  },
  jp: {
    nav: {
      services: "選ばれる理由",
      team: "チーム紹介",
      tech: "技術スタック",
      contact: "お問い合わせ",
    },
    hero: {
      headline: "ビジョンを確かな技術で実現する、シニア開発チーム",
      subheadline: "Javaマイクロサービスとモダンフロントエンドに特化した精鋭チームです。JLPT N1保有のバイリンガル専門家が主導し、日本企業の皆様に「日本品質」のソフトウェアを提供します。",
      cta: "プロジェクトについて相談する",
    },
    values: {
      title: "選ばれる理由",
      subtitle: "確かな技術力と、日本ビジネスへの深い理解。",
      items: [
        {
          title: "日本品質の追求",
          description: "コード品質、ドキュメント、テストに至るまで、徹底した品質管理を行います。「清潔感」のある設計を約束します。",
        },
        {
          title: "JLPT N1 レベルのコミュニケーション",
          description: "N1資格を持つブリッジSE・BAが参画。言語の壁を取り払い、要件定義から納品までスムーズな意思疎通を実現します。",
        },
        {
          title: "シニア・エキスパートのみで構成",
          description: "ジュニアエンジニアは在籍しません。平均実務経験7年以上のシニア層のみでチームを構成し、最短距離で成果を出します。",
        },
        {
          title: "納期の厳守",
          description: "納期は絶対の約束です。予測可能性の高いアジャイルプロセスを採用し、透明性のある進捗管理を行います。",
        },
      ],
    },
    team: {
      title: "チーム体制",
      subtitle: "成果を最大化するために設計された、最適なロール構成。",
      roles: [
        {
          title: "チームリード & アーキテクト",
          name: "Hiroshi T.",
          desc: "経験12年以上。システム設計、クラウド構築(AWS/Azure)。拡張性とセキュリティを担保します。",
        },
        {
          title: "シニア・ビジネスアナリスト",
          name: "Sarah M. (JLPT N1)",
          desc: "日完壁なバイリンガル（N1）。ビジネス要件を正確に技術仕様へ落とし込む、プロジェクトの要。",
        },
        {
          title: "シニア Java エンジニア",
          name: "Kenji R.",
          desc: "バックエンド専門。Spring Boot、マイクロサービス設計、高負荷APIの最適化。",
        },
        {
          title: "シニア Java エンジニア",
          name: "David L.",
          desc: "DBエキスパート。SQLチューニング、データ整合性、レガシー移行を担当。",
        },
        {
          title: "シニア フロントエンド",
          name: "Yuki S.",
          desc: "UI/UX重視。React/Vueのエキスパート。ピクセルパーフェクトな実装を提供。",
        },
        {
          title: "シニア フロントエンド",
          name: "James K.",
          desc: "状態管理設計。複雑なSPAアーキテクチャ構築とパフォーマンス改善を担当。",
        },
      ],
    },
    tech: {
      title: "技術スタック",
      subtitle: "モダンかつ信頼性の高い技術選定。",
    },
    contact: {
      title: "お問い合わせ",
      desc: "リードアーキテクトおよびビジネスアナリストが直接対応いたします。",
      form: {
        name: "貴社名・担当者名",
        email: "メールアドレス",
        message: "お問い合わせ内容",
        submit: "送信する",
      },
    },
    footer: {
      rights: "All Rights Reserved.",
    },
  },
};