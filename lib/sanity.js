import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "o4aceeox",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skPGZvQpLR5J9vwlyGQLQwcKFGa4YMU1RNmpWVWkRQ3BRqrCo3unsm11OzBaiy6z1iXITslcsQCk8sh0hensuO5pQIq1TST57MFAF3izWmhMLZVk2pilz2fWQHY3QVCrJBDHSjkzlw0q6vbp2EZSP4sGczBFGv9AOtfkP1tofF6QXbLXYkEO",
  useCdn: false,
});
