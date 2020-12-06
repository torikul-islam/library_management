module.exports = {
    hadith: {
        required: [
            "hadith_title",
            "total_chapter",
            "title_bn",
            "title_en"
        ],
        type: "object",
        properties: {
            hadith_title: {
                type: 'string',
                example: 'sohi bukhari (tawhid)'
            },
            total_chapter: {
                type: 'integer',
                example: 97
            },
            total_hadith: {
                type: 'integer',
                format: 8576
            },
            title_bn: {
                type: 'string',
                example: '"কেউ হেদায়েতের দিকে আহ্বান করলে যতজন তার অনুসরণ করবে প্রত্যেকের সমান সওয়াবের অধিকারী সে হবে, তবে যারা অনুসরন করেছে তাদের সওয়াবের কোন কমতি হবে না'
            },
            title_en: {
                type: 'string',
                example: 'Unicode Bangla Hadith Database, the first and largest Hadith database in Bangladesh, as well as Al-Quran, Tafsir and Pure Islamic texts.'
            }
        }
    }
}