# Host Schema

The Host Schema shows the properties that I found to be the most relevant for the Hosted By section.
Because a host can display which languages he or she speaks, and can have many languages, I defined a one-to-many
relationship between the User and a Language model.

# HostedBy Schema

Again, I was trying to establish the most relevant information from the Hosted By section for this schema.
Because a host (user) can have multiple co-hosts, I established a one-to-many relationship.

# Things To Know Section

I went through the forms for setting up a house on AirBnb and these were the properties available for these three sections (House Rules, Health & Safety, Cancellation Policy).

# Photos

All photos will be save in an AWS S3 bucket and the database schemas hold links to those photos
