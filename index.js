class Formatter {
  //add static methods here
<<<<<<< HEAD

  static capitalize( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
=======
}


static sanitize( string ) {
>>>>>>> b8c50296c356540039bef8e4903039685d0f6b9d
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n === 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
<<<<<<< HEAD
    return result.join( " " );
  }
}
=======
   
  }
}

>>>>>>> b8c50296c356540039bef8e4903039685d0f6b9d
