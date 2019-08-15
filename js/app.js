const ViewModels = class {
    constructor() {
        this.init = true
    }

    BlogViewModel(link, date, title, img, lead) {
        const img_path = 'images/'
        const el = `
        <article class="post post-carousel-item">
            <div class="post-image"><img src="${img_path + img}" alt="" /></div>
            <div class="post-content-holder">
                <div class="post-content">
                    <div class="post-info clearfix">
                        <span class="post-date">${date}</span>
                        <div class="post-meta">
                        </div>
                    </div>
                    <div class="post-text">
                        <h3><a href="${link}">${title}</a></h3>
                        <p>${lead}</p>
                        <a href="${link}" class="btn btn-primary btn-sm btn-round">Read more</a>
                    </div>
                </div>
            </div>
        </article>`

        return el
    }
}


const ViewController = class {
    constructor() {
        this.title = 'Tristan Kenneth Tarpley - Tagline tagline tagline'
        this.name = 'Tristan Kenneth <strong>Tarpley</strong>'
        this.address = '708 Main St. Houston TX 77002'
        this.email = 'me@tristantarpley.com'
        this.phone = '+1 (713) 364-3830'
        const d = new Date()
        this.year = d.getFullYear()
        this.heroImg = "https://i.ibb.co/Dwq4dnj/hero1.jpg"
        this.view_model = new ViewModels()
    }

    set(el, val, all=true) {
        if (all){
            document.querySelectorAll(el).forEach(i=>{
                i.innerHTML = val
            })
        } else {
            document.querySelector(el).innerHTML = val
        }
    }

    blog() {



        const blogs = [
            {
                link: 'https://medium.com/swlh/why-i-stopped-calling-myself-a-marketing-guy-91053e3f5902',
                date: '02/12/18',
                title: 'WHY I STOPPED CALLING MYSELF A MARKETING GUY',
                img: 'blog-6.jpg',
                lead: `And why that was one of the best marketing decisions I've made.`
            },
            {
                link: 'https://medium.com/swlh/marketing-is-stupid-part-1-a92ad4ce1fc2',
                date: '05/02/2018',
                title: 'MARKETING IS STUPID, PART 1',
                img: 'blog-1.jpeg',
                lead: `What do I spend?
                Where do I spend it? Should I run Facebook ads?
                These are the types of questions I get a lot — especially the first two. My response is usually the same: “Don’t focus on tactics. Tactics are the easy part. Make sure you’re focusing on the house rather than the tools.”`
            },
            {
                link: 'https://medium.com/swlh/what-the-is-a-micro-influencer-fd1256af2069',
                date: '04/13/2018',
                title: 'WHAT THE **** IS A MICRO INFLUENCER?',
                img: 'blog-2.jpg',
                lead: `What is the most effective way to sell a product? A referral from a friend.
                How do you scale that? Influencers.`
            },
            {
                link: 'https://medium.com/swlh/your-startup-is-like-a-wet-paper-sack-a86a82da4fb2',
                date: '03/21/2018',
                title: 'YOUR STARTUP IS LIKE A WET PAPER SACK',
                img: 'blog-3.jpg',
                lead: `Unless you abide by this lesson from New Orleans.`
            },
            {
                link: 'https://medium.com/swlh/you-had-a-successful-ico-now-what-eb1503667b60',
                date: '12/08/17',
                title: 'YOU HAD A SUCCESSFUL ICO. NOW WHAT?',
                img: 'blog-4.jpg',
                lead: `Now You Have Capital You Can't Afford To Waste.`
            },
            {
                link: 'https://blog.goodaudience.com/can-you-explain-your-startup-to-my-grandma-72cacf7c23c3',
                date: '12/08/17',
                title: 'CAN YOU EXPLAIN YOUR STARTUP TO MY GRANDMA?',
                img: 'blog-5.jpg',
                lead: `Put Your Startup Through The LightBulb Test`
            }
        ]
        blogs.forEach(obj => {
            let blog = this.view_model.BlogViewModel(obj.link, obj.date, obj.title, obj.img, obj.lead)
            document.querySelector(".post-carousel").innerHTML += blog
        });
    }

    render() {
        this.blog()
        this.set('title', this.title, false)
        this.set('.name-full', this.name)
        this.set('.street-address', this.address)
        this.set('.email', this.email)
        this.set('.phone', this.phone)
        this.set('.year', this.year)
    }
}





const callback = () => {
    const VC = new ViewController()
    VC.render()
};




  
if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}