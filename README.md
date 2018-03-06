# enricher-clearbit

A Clearbit enricher for midas. 


#### Example

Enrich any CSV, XLSX or JSON file with company or person data from Clearbit.com.
You can enrich your data either with Clearbits company or person endpoint. Just insert the endpoint of your choice together with your api key into the config (See examples). 

###### Source file

```csv
Company, Domain
Facebook, facebook.com
Google, google.com
Airbnb, airbnb.com
Dropbox, dropbox.com
```	

###### Enriched target result

```csv
Name,Domain,foundedYear,location, ...
Facebook,facebook.com,2004,"1601 Willow Rd	 Menlo Park	 CA 94025	 USA", ...
Google,google.com,1998,"Google Building 42	 1600 Amphitheatre Pkwy	 Mountain View	 CA 94043	 USA", ...
Airbnb,airbnb.com,2008,"888 Brannan St	 San Francisco	 CA 94103	 USA", ...
Dropbox,dropbox.com,2007,"333 Brannan St	 San Francisco	 CA 94107	 USA", ...
```	
This is only a small part of information you retrieve from the Clearbit API. To see the full result visit their website (https://clearbit.com/docs)
