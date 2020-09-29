<template>
    <div class="px-5 md:px-15 lg:px-20 xl:px-64 pt-10 pb-20">
        <p class="text-3xl mb-5">Privacy Policy</p>
        <p class="text-lg font-normal mb-5">INFORMATION AND DECLARATION OF CONSENT FOR PERSONAL DATA TREATMENT</p>
        <p class="text-lg font-normal mb-5">In accordance to article 13 of the GDPR (General Data Protection Regulation) EU Regulation N. 679/2016 of 27 April 2016</p>
        <p class="text-lg font-light mb-5">This document is issued pursuant to Article 13 of EU Regulation 2016/679 of 27 April 2016 on protection of natural persons with regard to personal data processing and in compliance with the legislation on personal data processing, as well as on the free movement of such data.</p>
        <div class="markdown" v-html="markdown"></div>
    </div>
</template>

<script>
import marked from 'marked'

var text = `
## Hello
Politecnico di Milano - General Manager upon proxy of the pro-tempore Rector – contact: [dirigen@polimi.it](mailto:dirgen@polimi.it)

## Appointed internal data processor
Daniela Molinari – Piazza Leonardo da Vinci 32, 20133, Milan (MI) – phone: +39 02 2399 6206 – mail: [daniela.molinari@polimi.it](mailto:daniela.molinari@polimi.it)
Data will be processed by other authorized parties and, for this purpose, in compliance with current legislation. 

## Responsible for data protection and contact point
Dr. Vincenzo Del Core - [privacy@polimi.it](mailto:privacy@polimi.it) phone: +39 02 2399 9378

## Purposes of data processing, legal basis, data categories and storage period
For the purposes of the application of European and national legislation on this matter (EU Reg. 679/2016, hereinafter Regulation), we inform you that your personal data will be used for the following purposes:

|n°|Purposes of the processing for which personal data are intended|Legal basis of data processing|Categories of personal data to be processed|Storage period of personal data|
|:-:|:-|:-|:-|:-|
|1|Participate to the development of a research activity (i.e. the Flood Damage Models Repository development).|Consent of the interested party (Article 6, paragraph 1, letter a) of the Regulations)|Personal data: - First name - Last name |For a period of 5 years|
|2|Newsletter subscription about the future Flood Damage Models Repository developments.|Consent of the interested party (Article 6, paragraph 1, letter a) of the Regulations)|Personal data:|For a period |
|3|Newsletter subscription for the purpose of promotion of events regarding the flood damage assessment sector (e.g. workshop, conferences, publications and scientific events).|Consent of the interested party (Article 6, paragraph 1, letter a) of the Regulations)|Personal data:|For a period |

## Nature of data
The collected data are compulsory. The failure to communicate the data will involve the impossibility to perform the services.

## Processing methods
The data treatments carried out for the purpose mentioned above in table 1 can be carried out on paper or digital means, manually and/or with electronic tools or, in any case, through automated processes, including in house database: DB Browser for SQLite. They are also stored in digital format for the duration of the storage period specified in the section above.

The access to the data acquired for the purposes n. 1, 2 and 3 is allowed to duly authorized staff.

## Recipient categories

In relation to the mentioned purposes, data may be disclosed to the following public and/or private subjects, as to say to companies and/or persons, in Italy and abroad, that provide services, including external ones:
- Universities or research centres (e.g. to organize events regarding flood damage assessment), to be considered as third-party recipients of the collected personal data.

In particular, your personal data may be communicated also to other public administrations, anonymised too, if these institutions must process them for procedures related to their institutional work, as well as to all those public entities to whom, with the same prerequisites, the communication is compulsory provided in accordance to EU provisions, laws or regulations, as well as insurance companies for possible accident insurance.


## Storage period of personal data and their return

At the end of the period indicated in TABLE 1, after that the limitation period for protection of the right of the interested party have been expired, the data will be deleted or given back anonymously.

## Transfer to Extra EU country

The Internal data processor [Daniela Molinari: [daniela.molinari@polimi.it](mailto:daniela.molinari@polimi.it)] can transfer personal data to non-EU territory for promotion and organization of activities (e.g. participation in sector-focused events) and to establish contacts with foreign third parties, on the basis of express and specific consent of the interested party, issued according to Article 49 of the U.E. Regulations on the basis of specific exceptions.

## Cookies policy

This website uses cookies, small text files which are registered on the user's terminal or which allow access to information about the user's terminal. In this specific case, the website uses third-party cookies for the analysis of the use of the website by visitors.

This site uses the following categories of third-party cookies:

**Google Analytics**
It is the Google’s own web analytics service used to analyze users’ use of the website, to compile reports on website activity and user behavior, to see how often users visit the site, how the site is tracked, and which pages are visited the most.

The data collected by the service are the following:
- Browser identifier
- etc

The collected data do not allow the personal identification of the users and are not cross-referenced with other information related to the same person. They are treated in aggregate and anonymized form (truncated to the last octet).

The collected data are transmitted from the users’ browser to the servers of Google.

The collected data are retained by Google Analytics for no more than 26 months.

Learn more about Google Analytics cookies at [Google Analytics Cookie Usage on Websites](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage).

For more information about Google's collection, storage, and use of personal data, under the Third-Party policy, check [Google's privacy policy](https://policies.google.com/privacy?hl=en).

The user can selectively disable the collection of data by Google Analytics by installing the [Google (opt out) component](https://tools.google.com/dlpage/gaoptout) on their browser.

## Link to other websites

Some pages of the FDM website may contain links to other websites that are not managed by our administration. The FDM administration does not share personal data with such sites and is not responsible for content, security, or privacy measures employed by other sites and expressly disclaims all responsibilities.

## Rights of the interested parties

As interested party, you can ask the Data Controller, at any time:

- Confirmation of the existence or not of your personal data;
- Access to your personal data and related information, the correction of incorrect data or the addition of incomplete data, the cancellation of your personal data (if any condition indicated in Article 17, paragraph 1 of the Regulations can be applied and it is in compliance with the exceptions provided in paragraph 3 of the same article), the limitation of processing of your personal data (when one of the conditions indicated in Article 18, paragraph 1 of the Regulations can be applied), the anonymization or blocking of data processed unlawfully, including data whose storage is not required in relation to the purposed for which the data were collected or subsequently processed.

As interested party, furthermore, you have the right to wholly or partly oppose:

- For legitimate reasons regarding the processing of his/her personal data, related to collection purposes.

These rights can be exercised by contacting privacy@polimi.it

If you deem that your rights have been violated by the Data Controller and/or by a third party, you have the right to submit a complaint to the Data Protection Authority and/or to another competent supervisory authority pursuant to the Regulation. 

Updated to 18 november 2019
`

export default {
    name: 'Privacy',
    computed: {
        markdown: {
            get() {
                return marked(text)
            }
        }
    }
}
</script>

<style>
/* Additional vertical padding used by kbd tag. */
.py-05 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
}

.markdown {
    @apply text-gray-900;
    @apply leading-normal;
    @apply break-words;
}

.markdown>*+* {
    @apply mt-0;
    @apply mb-4;
}

.markdown li+li {
    @apply mt-1;
}

.markdown li>p+p {
    @apply mt-6;
}

.markdown strong {
    @apply font-semibold;
}

.markdown a {
    @apply text-blue-600;
    @apply font-semibold;
}

.markdown strong a {
    @apply font-bold;
}

.markdown h1 {
    @apply leading-tight;
    @apply border-b;
    @apply text-4xl;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
    @apply pb-2;
}

.markdown h2 {
    @apply leading-tight;
    @apply border-b;
    @apply text-2xl;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
    @apply pb-2;
}

.markdown h3 {
    @apply leading-snug;
    @apply text-lg;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
}

.markdown h4 {
    @apply leading-none;
    @apply text-base;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
}

.markdown h5 {
    @apply leading-tight;
    @apply text-sm;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
}

.markdown h6 {
    @apply leading-tight;
    @apply text-sm;
    @apply font-semibold;
    @apply text-gray-600;
    @apply mb-4;
    @apply mt-6;
}

.markdown blockquote {
    @apply text-base;
    @apply border-l-4;
    @apply border-gray-300;
    @apply pl-4;
    @apply pr-4;
    @apply text-gray-600;
}

.markdown code {
    @apply font-mono;
    @apply text-sm;
    @apply inline;
    @apply bg-gray-200;
    @apply rounded;
    @apply px-1;
    @apply py-05;
}

.markdown pre {
    @apply bg-gray-100;
    @apply rounded;
    @apply p-4;
}

.markdown pre code {
    @apply block;
    @apply bg-transparent;
    @apply p-0;
    @apply overflow-visible;
    @apply rounded-none;
}

.markdown ul {
    @apply text-base;
    @apply pl-8;
    @apply list-disc;
}

.markdown ol {
    @apply text-base;
    @apply pl-8;
    @apply list-decimal;
}

.markdown kbd {
    @apply text-xs;
    @apply inline-block;
    @apply rounded;
    @apply border;
    @apply px-1;
    @apply py-05;
    @apply align-middle;
    @apply font-normal;
    @apply font-mono;
    @apply shadow;
}

.markdown table {
    @apply text-base;
    @apply border-gray-600;
}

.markdown th {
    @apply border;
    @apply py-1;
    @apply px-3;
}

.markdown td {
    @apply border;
    @apply py-1;
    @apply px-3;
}

/* Override pygments style background color. */
.markdown .highlight pre {
    @apply bg-gray-100 /* !important */;
}
</style>