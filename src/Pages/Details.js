import React from "react";
import { createContext } from "react";
import { useState } from "react";
// import Home from './Home';
// import Hollywood from './Hollywood';
// import Bollywood from './Bollywood';

export const Store = createContext();
const Details = (props) => {
  const [details, setDetails] = useState([
    {
      id: 1,
      title: "My Favourite Movie",
      img: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/5d93a8896f3dfe001ea64e94.jpg",
      category: "Hollywood",
      description:
        "The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel Studios later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later. It is a conclusion to the story of the MCU up to that point, ending the story arcs of several main characters. The film's plot revisits several moments from earlier films, bringing back actors and settings from throughout the franchise. Filming began in August 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, shooting back-to-back with Infinity War, and ended in January 2018",
    },

    {
      id: 2,
      title: "Hacked Movie",
      img: "https://i.pinimg.com/originals/ef/ec/a4/efeca473ffcdf5a522bdda88baded6fc.jpg",
      category: "Hollywood",
      description:
        "Infinite Storm is a 2022 American drama adventure film directed by Małgorzata Szumowska, co-directed by Michał Englert, and with a screenplay by Josh Rollins, based on the article High Places: Footprints in the Snow Lead to an Emotional Rescue by Ty Gagne.[3] The film stars Naomi Watts, Billy Howle, Denis O'Hare, Parker Sawyers and Eliot Sumner.",
    },
    {
      id: 3,
      title: "Doctor Strange",
      img: "https://1.bp.blogspot.com/-9VwtcOvJz1Q/Xz07pVVoUuI/AAAAAAAAAeU/kk0yE0AE2MoZSYeGGEb6LGs8KSPnW5xhACPcBGAYYCw/s1600/20200819_194704.jpg",
      category: "Hollywood",
      description:
        "For all of its wondrous world-building and trippy effects, Doctor Strange isn’t the evolutionary step forward for Marvel that it needs to be storytelling-wise. Underneath all of its improvements, the core narrative is something we’ve seen countless times",
    },
    {
      id: 4,
      title: "Corporate Movie",
      img: "https://upload.wikimedia.org/wikipedia/en/6/67/Corporate%28Film%29.jpg",
      category: "Hollywood",
      description:
        "Corporate centers around the power games between two industrialists, The Sehgal Group of Industries (SGI) owned by Vinay Sehgal and the Marwah Group of Industries (MGI) owned by Dharmesh Marwah. The two companies are traditional rivals in the food and beverages products business. Nishigandha Nishi  Dasgupta is the vice-president of SGI, while Vinay Sehgal's brother-in-law Ritesh joins in later as senior vice president",
    },
    {
      id: 5,
      title: " Horror Movive ",
      img: "https://i.ytimg.com/vi/zWHqaLV19EI/maxresdefault.jpg",
      category: "Hollywood",
      description:
        "Clare Kramer, Thomas Calabro, Tilky Jones, and Allison McAtee in The Wrong House (2016) ",
    },
    {
      id: 6,
      title: "EveryThing EveryWhere All at once ",
      img: "https://www.avsforum.com/attachments/everything-everywhere-all-at-once-header-jpg.3307941/",
      category: "Hollywood",
      description:
        "Yeoh is the anchor of the film, given a role that showcases her wide range of talents, from her fine martial art skills to her superb comic timing to her ability to excavate endless depths of rich human emotion often just from a glance or a reaction.Full review",
    },
    {
      id: 7,
      title: "SHERSHAH",
      img: "https://th.bing.com/th/id/OIP.nN2XX1lxj6I_wD3SLu2gwwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
      category: "Bollywood",
      description:
        "Shershaah is the story of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.",
    },
    {
      id: 8,
      title: "STUDENT OF THE YEAR 2",
      img: "https://th.bing.com/th/id/OIP.Uh9wB_9R2fayAhAGmCq15AHaJ4?rs=1&pid=ImgDetMain",
      category: "Bollywood",
      description:
        "Student of the Year 2 is a 2019 Indian Hindi-language romantic comedy film directed by Punit Malhotra and produced by Nokia Studios and Karan Johar's Dharma Productions. A standalone sequel to the 2012 film Student of the Year, it stars Tiger Shroff, Tara Sutaria, Ananya Panday, and Aditya Seal.",
    },
    {
      id: 9,
      title: "TANHAJI",
      img: "https://th.bing.com/th/id/OIP.1qr0E_YN8rNnC2Mub_oJvQHaFN?rs=1&pid=ImgDetMain",
      category: "Bollywood",
      description:
        "Tanhaji: The Unsung Warrior is a 2020 Indian Hindi-language historical action film, co-written and directed by Om Raut and produced by Bhushan Kumar, Krishan Kumar and Ajay Devgn under T-Series Films and Ajay Devgn FFilms. Tracing the life of Maratha warrior Tanaji Malusare, it stars Ajay Devgn",
    },
    {
      id: 10,
      title: "Pk",
      img: "https://www.india.com/wp-content/uploads/2014/12/aamir-khan-pk3.jpg",
      category: "Bollywood",
      description:
        "P.K.: Which god should I believe? You all say that, it's only one god. I say, no... there are two gods. One is the one who created us all. The other one is the one created by people like you. We know nothing about the god who made us all. But the god people like you made is exactly like you... liar, pretend to act, giving false promises, meeting rich people sooner, letting the poor neglected, happy when get praised... People are afraid to even say a word. My right number is very simple, the God who created us all, put faith in Him. And the god like you created, the duplicate god, destroy it.",
    },
    {
      id: 11,
      title: "MARJAAVAN",
      img: "https://i.ytimg.com/vi/RemShT6JAHw/maxresdefault.jpg",
      category: "Bollywood",
      description:
        "Marjaavaan (transl. I will die) is a 2019 Hindi language romantic action film[4] written and directed by Milap Milan Zaveri and produced by T-Series and Emmay Entertainment.[5] Marjaavaan stars Riteish Deshmukh, Sidharth Malhotra, Rakul Preet Singh and Tara Sutaria.[6] It was described by co-producer Bhushan Kumar as a masala and dramatic love story.[7] The film received mixed reviews from critics and was commercially 'below average' at the box office. This marked the second collaboration between Malhotra and Deshmukh since Ek Villain[2][8]",
    },
    {
      id: 12,
      title: "GOODBYE",
      img: "https://m.media-amazon.com/images/M/MV5BYzc4ZTAxMmMtZjdmMS00YWRmLTlmNDUtMjBiNGYzNzJjZTJhXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
      category: "Bollywood",
      description:
        "Goodbye is a 2022 Indian Hindi-language family comedy-drama film written and directed by Vikas Bahl and produced by Bahl, Viraj Savant, Ekta Kapoor and Shobha Kapoor under their banners Good Co, Balaji Motion Pictures and Saraswati Entertainment ",
    },
    {
      id: 13,
      title: "Bodh Gaya",
      img: "https://media2.thrillophilia.com/images/photos/000/365/731/original/1611746786_admi.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "Historical Facts The place is considered to be the spot where Gautama Buddha attained enlightenment.King Ashoka constructed a small shrine at this site in the 3rd century BCE and a stone railing was constructed around this place in the 1st century BCE. The small shrine was replaced by the Mahabodhi Temple in the 2nd century BCE, which was declared as a UNESCO World Heritage Site in 2002.",
    },
    {
      id: 14,
      title: "Rajgir,Bihar",
      img: "https://media2.thrillophilia.com/images/photos/000/370/668/original/1629090956_Shanti_Stupa_Rajgir-A7307500.JPG?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "Having its name mentioned in Mahabharata and other Buddhist and Jain scriptures, the town has served as a major excavation site and contributed to the discovery of many relics related to these religions. Surrounded by lush green environs and rugged hills, Rajgir is famous for its virgin natural beauty. Picturesque springs, old mystic caves, and thick lush forests add to the unfathomable charm of this scenic town.",
    }, {
      id: 15,
      title: "GolGhar ",
      img: "https://media2.thrillophilia.com/images/photos/000/245/688/original/1624434450_shutterstock_1535561528.jpg?w=1400&h=320&dpr=1.5",
      category: "Bihar",
      description: "Originally known as Pataliputra and renamed as Azimabad during the Mughal rule, the modern-day Patna is the capital city of Bihar state. Lying along the picturesque south bank of the river Ganges, Patna is one of the oldest cities in the country. Dating back to the 5th century BCE, the ancient Pataliputra was founded by the king of Magadha, Ajathashatru.",
    }, {
      id: 16,
      title: "Karkat Waterfall",
      img: "https://media2.thrillophilia.com/images/photos/000/371/471/original/1618393824_cq5dam.web.1280.765.jpeg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "This is a picturesque waterfall ensconced amidst basalt cliffs, occasional rainbows, and sprouting maple trees. It is located right near the Kaimur hills, and you can enjoy a picnic with your friends and family. This waterfall is not only famous among Indians but many people from outside have appreciated its beauty. A famous British official Henry Ramsay once mentioned Karkat Waterfall as one of the most picturesque waterfalls surrounded by striking lush greenery.      ",
    }, {
      id: 17,
      title: "NDhua Kund Waterfall",
      img: "https://media2.thrillophilia.com/images/photos/000/371/474/original/1618394064_EKFEnX3VAAE097Y.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "This is a stunning waterfall where you can enjoy the picture-perfect scenery of unspoiled nature. It boasts extremely high water drops, and you can enjoy a rainbow sighting here due to the presence of mist.This is an evocative wonder of Bihar with perpetual thunder, impressive jumps, and spectacular surroundings. It also has some of the best hiking trails that will take you to the best viewing areas of this waterfall. The water flow is strong here and the authorities have utilized it to produce fifty to a hundred megawatt of electricity",
    }, {
      id: 18,
      title: "Mahabodhi Temple",
      img: "https://media2.thrillophilia.com/images/photos/000/373/232/original/1622039616_shutterstock_693514612.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "A UNESCO World Heritage Site, the Mahabodhi Temple was built back in the 3rd century BC. Offering one of the best Buddhist religious experiences in Bihar, the Mahabodhi Temple is constructed at the same place, where Gautama Buddha attained enlightenment.",
    }, {
      id: 19,
      title: "Takht Sri Harmandir Sahib Ji",
      img: "https://media2.thrillophilia.com/images/photos/000/373/224/original/1622099043_8._TAKHT_SHRI_HARIMANDIR_JI_PATNA_SAHIB_PATNA.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "Built back in 1839, Takht Sri Harmandir Sahib Ji is one of the most important religious places in Bihar for the sikhs. This majestic gurudwara was built to commemorate Guru Gobind Singh, who was born here back in 1666.This place has also been visited by the revered sikh gurus, Guru Tegh Bahadur and Guru Nanak.",
    }, {
      id: 20,
      title: "Thai Monastery ",
      img: "https://media2.thrillophilia.com/images/photos/000/373/225/original/1622038170_shutterstock_1425657557.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "Established back in 1957 by Buddhist monks and the Government of Thailand, the Thai Monastery aims at propagating the preachings of Lord Gautama Buddha and strengthening the friendly relationship between Thailand and India.",
    },
    {
      id: 21,
      title: "Vaishali Spiritual Walking Tour",
      img: "https://media2.thrillophilia.com/images/photos/000/372/991/original/1621418274_2018032843-1024x683-1-1024x683.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "Being the birthplace of lord Mahavira, Vaishali is a very spiritual destination flocked with tourists throughout the world. Considered to be a place of enlightenment and salvation for the Jain community, this place is loaded with prayer sites and obviously pious vibes.",
    }, {
      id: 22,
      title: "Kesaria Stupa, East Champaran",
      img: "https://media2.thrillophilia.com/images/photos/000/373/001/original/1628855815_40._Kesariya_Stupa.jpg?w=753&h=450&dpr=1.0",
      category: "Bihar",
      description: "A very famous archaeological site in Tajpur, the Kesaria Stupa has been a pilgrimage site among Buddhists. Built by Mauryan King Ashoka, this one is the biggest Buddha Stupa in India located in the Kesariya town of Bihar",
    },

    // {
    //   id: 22,
    //   title: "Lauriya Nandangarh, West Champaran",
    //   img: "https://media2.thrillophilia.com/images/photos/000/373/002/original/1621492677_a.jpg?w=753&h=450&dpr=1.0",
    //   category: "Bihar",
    //   description: "This is now a regular Ghat for Darshan of Narmada ji, but still due to convenience in travel (as it is located on the highway ) this Ghat remains popular, and hence crowded .at this place you can see the magnificent view of river, and at the shallow river bank you can have a Holly dip also. the river is mostly clean and full of water almost all months .",
    // },
    // {
    //   id: 23,
    //   title: "Dashrath Manjhi Road, Gaya",
    //   img: "hhttps://media2.thrillophilia.com/images/photos/000/374/468/original/1625816821_IMG_20171006_140900436.jpg?w=753&h=450&dpr=1.0",
    //   category: "Bihar",
    //   description: "Who has not heard the famous story of Dashrath Manji, a man who himself cut a whole mountain to create a road. It took him nearly 22 years to construct this road. Dashrath Manjhi, a man belonging to a very poor society, a labourer by profession in the Gehlaur village, near Gaya in Bihar is famous for single handedly carving a road after his wife died in 1959 due to injury caused by falling from the same mountain. People in his village did not have access to even the basic facilities and had to cross that mountain to go to the other side. After the sudden demise of his wife, he decided to carve a path of 110 m long, 9.1 m wide and 7.7 m deep cutting through the tough mountain with just a hammer and chisel. After years of struggle he was able to do so and this uplifted his village a lot.",
    // },




    {
      id: 23,
      title: "PANEER DOSA",
      img: "https://www.nandanmsd.com/wp-content/uploads/2020/10/paneer-chilli-dosa.jpg",
      category: "Food",
      description: "In India, paneer is a staple food ingredient for every vegetarian, as well as for non-vegetarians. It is tasty, easy to make and includes a good amount of protein to our everyday diet.",
    }, {
      id: 24,
      title: "PANEER PIZZA",
      img: "https://th.bing.com/th/id/OIP.BUaTUzBg_j0w6FH2GJEYkwHaHa?pid=ImgDet&rs=1",
      category: "Food",
      description: "Paneer pizza is a delicious pizza that is made with paneer (Indian cottage cheese) as the main topping. It is a fusion of Indian and Italian flavors, and is usually made with a whole wheat crust. The paneer is marinated with Indian spices and yogurt, and then mixed with pizza sauce, onions, capsicum, spinach, and other vegetables. The pizza is then topped with mozzarella cheese and baked to perfection.",
    }, {
      id: 25,
      title: "COLD COFFEE",
      img: "https://www.thedinnerbite.com/wp-content/uploads/2020/06/Iced-instant-coffee-recipe-img-19-1-of-1.jpg",
      category: "Food",
      description: "Cold coffee is a popular chilled beverage that is perfect for a warm day. It is made by blending coffee, sugar, and milk together with ice to create a refreshing and rich beverage, with a delightfully frothy layer on top",
    }, {
      id: 26,
      title: "RAJSTHANI THALI",
      img: "https://i.redd.it/e9yo0utefpo61.jpg",
      category: "Food",
      description: " A traditional Rajasthani thali is a platter of several vegetarian dishes served in silver or copper ware. The dishes include ker sangri, gatte ki sabzi, Rajasthani kadhi, panchmela dal, and dal baati churma. The thali also features rotis made of bajra, jowar, and makka, deep-fried kachoris, pulaos, raitas, pickles, and relishes. The meal ends with sweets such as mohanthal and jalebis ",
    }, {
      id: 27,
      title: "PANNER FRIED RICE",
      img: "https://bing.com/th?id=OSK.337d4dcc736df4959bbcacb8f92bbd7a",
      category: "Food",
      description: "The first paneer fried rice recipe I have shown in this post is a fusion dish made in the Chinese style but with typical Indian spices. So it is super flavorsome, delicious and spicy with a mélange of Indian and Chinese flavors. The second recipe is the kids’ version and I have not used any bottled sauce for that."
    }, {
      id: 28,
      title: "Paneer Pulao",
      img: "https://r2.community.samsung.com/t5/image/serverpage/image-id/2170990iCDC5D9696CF1B635/image-size/large?v=v2&px=999",
      category: "Food",
      description: "Paneer Pulao Recipe in Hindi http://goo.gl/49cPFc Also known as paneer biryani recipe, paneer pulao recipe in hindi, Cottage Cheese Pulao",
    }, {
      id: 29,
      title: " Latest Hacking Computer",
      img: "https://th.bing.com/th/id/OIP.h5MxJtDZZJp5xV8et-HZ2QHaEy?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.h5MxJtDZZJp5xV8et-HZ2QHaEy?pid=ImgDet&rs=1",
      category: "Technology",
      description: "Best Computers for Hacking. If you’re looking for a computer that is good for hacking, there are a few factors to consider. -Factors to Consider: Speed, processing power, and memory are all important factors when choosing a computer for hacking",
    }, {
      id: 30,
      title: "Super Computer",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh8dSVcsR53jglNxcEnwoZ7escCAKtymuZiPlafOcq0L0UM5UOBx884pB7oxCmgfm9iBxsWT7LqL-bpjS8si1kZUbNdFL0wTgXz3DOjTBsH0EkOpPSxVmvfT3BX-VM0NZhP-Gb6R6C27fkIIqM2ZBy-RwyjUTl6psx1QfU-QF2iRbAI3d1bavhCDovjw/s959/How%20Businesses%20Can%20Benefit%20with%20Data%20Center%20India%20-%2014884%20_%20MyTechLogy.jpg",
      category: "Technology",
      description: "A supercomputer is a computer with a high level of performance as compared to a general-purpose computer. The performance of a supercomputer is commonly measured in floating-point operations per second (FLOPS) instead of million instructions per second (MIPS). Since 2017, supercomputers",
    }, {
      id: 31,
      title: "Foldable Phone",
      img: "https://images1.livehindustan.com/uploadimage/library/2021/12/15/16_9/16_9_1/twitter_nextrift_1639562913.jpg",
      category: "Technology",
      description: "The Samsung Galaxy Fold series has gone unchallenged in India for the past few years, and we recently saw Samsung really stepping up its game with the Galaxy Z Fold 3 (Review). However, Oppo has just revealed one big surprise before we wrap up 2021, which gives us enough reason to rethink whether the Galaxy Z Fold indeed represents the best way to make a large-screen foldable. The Oppo Find N was unveiled a week ago as the company's first commercially available foldable smartphone, and even though it is on sale only in China, Oppo India sent us a unit to play with for a short while.",
    }, {
      id: 32,
      title: "Chandryan 3",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-07/chandrayaan_3_b.jpg?VersionId=KMvLAnlt_Dz2TqDevdxD3p7UlsEUmveF",
      category: "Technology",
      description: "By India Today Science Desk: Chandrayaan-3 has commenced its journey to the launchpad, encapsulated aboard the Launch Vehicle Mark-3 (LVM-3) at the Satish Dhawan Space Centre in Sriharikota.",
    }, {
      id: 33,
      title: "Artificial Intelligence",
      img: "https://th.bing.com/th/id/OIP.TKziVGMgadot4JUwINii7gHaE8?pid=ImgDet&rs=1",
      category: "Technology",
      description: "Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experience.",
    }, {
      id: 34,
      title: "Indian Ship",
      img: "https://static.abplive.com/wp-content/uploads/2020/08/31131924/indian-navy.jpg",
      category: "Technology",
      description: "New Delhi: Almost two and a half months after the Galwan Valley clash which led to death of as many as 20 Indian soldiers in eastern Ladakh, the Indian Navy has recently sailed one of its frontline warship to the South China sea. As per reports, the move by Indian Navy came as a displeasure to the Chinese side who raised objection over the development during the talks between two nations",
    },

    {
      id: 35,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 36,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 37,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 38,
      title: "The Money Heist",
      img: "",
      category: "Hollwywood",
      description: "",
    }, {
      id: 39,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 40,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    },

  ]);
  return (
    <div>
      <Store.Provider value={[details, setDetails]}>
        {props.children}
      </Store.Provider>
    </div>
  );
};

export default Details;