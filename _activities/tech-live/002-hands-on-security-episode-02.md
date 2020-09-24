---
layout: sessionTemplate

id     : 2
title: 'TechLive "Hands-on-security" Episode-02'

linkName:  Episode 02
linkDesc: 'A "Hands on" session on Security by Md. Kawser Habib, a Software and Security Engineer working in Bangladesh.'
# give embedded youtube link here ( ones that must contain 'embed' keyword )
youtubeLink: "https://www.youtube.com/embed/CbeUh_huABs"
guests  :
    - name: Md. Kawser Habib
      position  : Cyber Security Manager, ECS Lab ltd
      link: https://www.linkedin.com/in/khabib97/
hosts:
  - name: Shashata Sawmya
    link: https://www.linkedin.com/in/shashata-sawmya/
writers:
  - name: Nazmul Islam Ananto
    link: https://www.linkedin.com/in/nazmulislamananto/
---

#### Description of the guest

Md Kawser Habib completed his bachelor's in CSE from BUET in 2015. He is currently working as a full-time cyber security manager for ECS Lab ltd. After graduation he started working as a software engineer in the industry, and later shifted to the security domain. He has more than 4 years of experience in backend application development and around 1.5 years of experience in the cyber security domain. Some of his core areas of interest are application security, penetration testing and digital forensic. 

<br>

#### Let’s get to the session !

**Q01** : Bhaia, what can we do if ping (icmp echo) is restricted in a LAN?

A very good question indeed. Now-a-days the firewalls are smart enough to detect pings and automatically drop them and truth be told ping is not the only tool we use. So when we visit a website, for example mzamin.com, we already know that the system behind this is very much alive. After that, we can use some TCP/UDP/Stealth Scan based scans too which happens to get the job done.

**Q02**	: We checked the ports 1-8888, why not all?

Well, nmap itself is quite heavy and for obvious reasons, I practiced the whole thing myself before starting this demonstration (smile). So, I already knew there weren’t more than two hundred ports open. For your information, port scanning is a very noisy process and the firewalls we use today, like Next-Generation, block any ip address they detect creating such noise. That is the reason we try to minimize the noise generation and keep ourselves least noticeable. In fact, it is even better to scan the ports we usually use one by one rather than scanning all at a time.

**Q03**	: Bhaia, how can we know what security measures/standards to follow when configuring a new software because the learning threshold might be steep at first and configuration might not be user friendly?

This is why domains are being well separated now. There was a time when the application developer had to think about the server-side too. For example, I once tried to configure a MicroTech router and ended up finding myself doing things I couldn’t make a meaning of. So you see it’s better leaving things up to the experts or taking time and gathering necessary knowledge about that field first. 

When we are in the software development phase, default configuration(database...) might not be an important issue but once we go public, the configuration issue becomes a very major one. So let me tell this again, for software development, please follow the secure software development guidelines. And for hardware deployment, it is always better to contact the experts or try to learn basic hardening before diving into something new.

**Q04**	: What should we do when there’s a vulnerability in a system but no readymade exploit for it?

In that case,if the product is yours or source code is open, you have to try to fix it before an exploit is published. If source code is closed and it is a third party application, there’s not much for you to do, inform your vendor. Now say you are having troubles using a microsoft product but microsoft hasn’t yet provided a patch for it. So, for survival,  add some new rules on your firewall/ids/ips. 

**Q05**	: When an update gets released covering the security issues from the previous update, they usually don’t get rid of all their previous functionalities. For example, when Java released version 07, they kept some compatibilities from Java 06 too so that older codes don’t die right away. What do you think we should do about that?

There are a handful of decisions we may take in those cases. It depends on our policy actually. The authority then has to decide whether they want to keep it that way and take the risk or update their codes. If it suits their policy and budget, most of the time they adopt and change to the newer version. Or sometimes they cut the vulnerable portions which are not that much vital only and other services remain unchanged. And another thing, the old version having security issues doesn’t necessarily mean our system built on that has to have security holes too. For instance, there are some nuclear power plants still running on Windows XP. Now you might say that XP is out-of-date and they must have major security problems then. The answer is no. Obviously they are trying to adopt newer versions while keeping the fact in mind that they can’t be offline for even a brief moment. But in the meantime they also have taken enough security measures so that the security holes in Windows XP have, are covered properly. Same goes for us too.

**Q06**	: We have this thing for downloading free things using torrent here in Bangladesh. But there might be some flaws in peer to peer to connections. Would you like to comment on this thing?

This is true that torrent has very low or sometimes no security. Even most of the torrent sites suggest using VPN to hide our identity. Actually, whenever there is something free which is not actually free (!), there has to be something fishy going on. So I’d suggest using open source things rather than trying to get paid things for free. And always check for malicious properties before downloading it. Because once it gets into our home, it becomes very difficult to get rid of it.

**Q07**	: What kind of impact would Malwares like RootKit cause in financial or critical infrastructures in Bangladesh?

After that incident at Bangladesh Bank, all the banks and financial institutes are now conscious about this. As a result, they spent a lot buying hardwares and softwares. But will those really be able to protect them? Maybe some next attack could answer that. There was a recent incident regarding a DBBL Booth too. To be honest, these things are pretty much common now-a-days not only in Bangladesh but also throughout the world. I suggest all banks should have dedicated security teams and also try to improve their security skill over time. Security is not something we can achieve just by buying some softwares and hardwares. It’s more like a routine. We have to check things properly everyday and check for malicious attempts. In some offices, we just leave our routers in the open space. Anyone can gain access through LAN then. They wouldn’t even need a password then. And sometimes we just leave our computers’ usb ports open and anybody could plug in anything then. These may sound silly but they actually happened. So monitoring everything every minute is very much important for a company to maintain their security.

**Q08**	: Bhaia, if I download a software and then want to check it in 'virustotal', we should upload it there. But what if the file is very large?

We should use an antivirus/endpoint security tool for that then. Better antiviruses are always the paid ones. They scan a file the moment we download it and generate an alert or delete things right away whenever they find something malicious depending on how we set the settings. There are even some softwares which say you should turn off your antivirus in order to download them. Now what do you think you do? Of course don’t turn your antivirus off, why would you?