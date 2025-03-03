I'd like to design a simple cross platform PWA / website that allows users to very easily sell items. I thought of this idea after getting annoyed at the work that it takes to sell items when trying to move. You have to take pictures, determine brand names, product details, and condition, and find a possible price to sell it for. After that, you have to create a listing and manage messages with prospective buyers.

This app can offload both of these areas of work:
creating the listing:
- this will involve understanding the product using AI / it's underlying world model
- searching the web for other similar products (google lens and amazon can do this natively - might be worth seeing if we can plug into their system)
- condensing all of this information into a good listing - a name, description (with all relevant attributes), and price
managing the listing:
- posting the listing to ebay / facebook marketplace / craigslist 
- dealing with chats with prospective buyers - clarifying questions about the object (asking further questions of our app's user / seller if need be), negotiating, and coordinating
- if the object needs to be shipped, making a shipping label and sending it to the user

I was thinking that this app could take advantage of the advent of multimodal llms that have robust world understanding, image search capabilities that we have to search for similar related products, and ai chat capabilities for negotiating and selling.

For implementation, I want this app to be as simple as possible - I only want 2 screens, a camera / create listing screen, and a listing status screen. 
On the camera screen, the user should take pictures as needed (top of screen), and a draft listing is created with the help of AI on the bottom of the same screen. When ready, the user can click the post button at the bottom, which should take the listing live, and take the user to the listings page. The listings page should be pretty simple - with status of current listings and the ability for the user to update the listings (taking them back to the capture page) or see any associated messages with the listings. For an active listing, the status should be represented as Draft, Listed, In Talks, and Sold. 

The user should be able to set a minimum price, but after that they shouldn't have to deal with chatting with potential buyers (unless they want to) - that should all be handled through the AI's "seller agent". The app should notify the user if it needs any clarification about the product, or if a buyer is interested and has agreed to a sale. In that case, it should give the user a shipping label to print and box the item, or details about the pick up if its in person.

Help me create a simple mockup for this. My focus is simplicity and functionality - let's not waste time on making lots of screens - but focus on the main value proposition of the app.