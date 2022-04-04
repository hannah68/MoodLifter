export interface questionType {
    question: string,
    label: string,
    name: string
}

export const questions:  Array<questionType> = [
    {
        question: "Can you tell me about your favourite person? who do you enjoy hanging out with?",
        label: 'Sally',
        name: 'favPerson'
    },
    {
        question: "where is your favourite place in your town?",
        label: 'Tower bridge',
        name: 'favPlace'
    }
    ,
    {
        question: "What are you most grateful for?",
        label: 'Family, friends, health,...',
        name: 'gratitude'
    }
    ,
    {
        question: "What are the things you're most passionate about?",
        label: 'Animals, learn foreign languages',
        name: 'passion'
    }
    ,
    {
        question: "What are your greatest accomplishments in life so far?",
        label: 'Graduating near the top of my class last year',
        name: 'accomplishment'
    },
    {
        question:  "Tell us about your favourite food?",
        label: 'pizza',
        name: 'favFood'
    }
]