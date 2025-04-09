---
layout: layout.njk
title: Contact
description: Get in touch with the Semantic Blog team.
---

<section aria-labelledby="contact-form">
 <h2 id="contact-form">Contact Us</h2>
 <form aria-label="Contact Form">
    <div>
      <label for="name">Name:</label>
      <input id="name" name="name" type="text" required aria-required="true" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" name="email" type="email" required aria-required="true" />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required aria-required="true"></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</section>
