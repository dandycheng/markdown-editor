const markdownRegex = {
    '^#+\s+[\S]+$': (content) => {
        let nHash = content.match(/^#+/g).split('').length
        let tag = nHash <= 4 ? `h${nHash}` : 'p'
        `<${tag}>${ content }</${tag}>`,
    },
    ''
}