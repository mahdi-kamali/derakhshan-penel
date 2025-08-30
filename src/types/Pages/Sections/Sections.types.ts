// 1) Sections from the homepage
type Sections = {
  UNSET: {
    type: "UNSET";
    components: any;
  };
  HOME_HERO: {
    type: "HOME_HERO";
    components: {
      EN: {
        logo: string; // <img> src
        tagline: string; // "YOUR WISH IS OUR COMMAND"
        experience: string; // "With more than 80 years..."
      };
      FA: {
        logo: string;
        tagline: string;
        experience: string;
      };
    };
  };

  HOME_LEADERSHIP: {
    type: "HOME_LEADERSHIP";
    components: {
      EN: {
        founder: string;
        deputyCEO: string;
        ceo: string;
      };
      FA: {
        founder: string;
        deputyCEO: string;
        ceo: string;
      };
    };
  };

  HOME_ABOUT_US: {
    type: "HOME_ABOUT_US";
    components: {
      EN: {
        title: string; // "About Us"
        description: string; // whole paragraph text
      };
      FA: {
        title: string;
        description: string;
      };
    };
  };

  HOME_ADVANCED_PACKAGING: {
    type: "HOME_ADVANCED_PACKAGING";
    components: {
      EN: {
        title: string; // "Advanced Packaging Solutions"
        description: string; // the text block under it
      };
      FA: {
        title: string;
        description: string;
      };
    };
  };

  HOME_EXCLUSIVE_GIFT_BOXES: {
    type: "HOME_EXCLUSIVE_GIFT_BOXES";
    components: {
      EN: {
        title: string; // "Exclusive Gift Boxes"
        description: string; // text under this section
      };
      FA: {
        title: string;
        description: string;
      };
    };
  };

  HOME_CONTACT_FOOTER: {
    type: "HOME_CONTACT_FOOTER";
    components: {
      EN: {
        phone: string;
        email: string;
        address: string;
        workingHours: string;
        quickLinks: string[]; // Home, About Us, Services, Contact
        supportLinks: string[]; // FAQ, Terms of Use, Support Center
        socialLinks: string[]; // Telegram, Instagram, LinkedIn, Twitter
      };
      FA: {
        phone: string;
        email: string;
        address: string;
        workingHours: string;
        quickLinks: string[];
        supportLinks: string[];
        socialLinks: string[];
      };
    };
  };
};

// 2) Shared base fields
type BaseFields = {
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _id: string;
};

// 3) Final type
export type ISectionsBase = BaseFields & Sections[keyof Sections];
