// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var A, C, G, T;
    
    var i, count = [], tmpR, tmpS, tmpE, result = [];
    
    A = C = G = T = 0;
    
    for ( i = 0; i < S.length; i++ ){
        switch( S[i] ){
            case 'A':
                A++;
            break;
            
            case 'C':
                C++;
            break;
            
            case 'G':
                G++;
            break;
            
            case 'T':
                T++;
            break;
        }
        count.push( A + '' + C + '' + G + '' + T );
    }
    
    for ( i = 0; i < P.length; i++ ){
        tmpS = ((P[i] - 1) < 0 ? '0000' : count[ P[i] - 1 ]).split('');
        tmpE = count[ Q[i] ].split('');
        
        tmpR = tmpE[0] * 1 - tmpS[0] * 1;
        if (tmpR > 0 ){
            result.push( 1 );
            continue;
        }
        
        tmpR = tmpE[1] * 1 - tmpS[1] * 1;
        if (tmpR > 0 ){
            result.push( 2 );
            continue;
        }
        
        tmpR = tmpE[2] * 1 - tmpS[2] * 1;
        if (tmpR > 0 ){
            result.push( 3 );
            continue;
        }

        result.push( 4 );
    }
    
    return result;
}