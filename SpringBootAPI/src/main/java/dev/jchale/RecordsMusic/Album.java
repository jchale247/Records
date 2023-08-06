package dev.jchale.RecordsMusic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "OwnedAlbums")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Album {
    @Id
    private ObjectId id;

    private String spotifyId;

    private String albumTitle;

    private String releaseDate;

    private String spotifyLink;

    private String artists;

    private String poster;

    private String numSongs;

    public Album(String spotifyId, String albumTitle, String releaseDate, String spotifyLink, String artists, String poster, String numSongs) {
        this.spotifyId = spotifyId;
        this.albumTitle = albumTitle;
        this.releaseDate = releaseDate;
        this.spotifyLink = spotifyLink;
        this.artists = artists;
        this.poster = poster;
        this.numSongs = numSongs;
    }
}
