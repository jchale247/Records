package dev.jchale.RecordsMusic;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlbumService {
    @Autowired
    private AlbumRepository albumRepository;

    private MongoTemplate mongoTemplate;

    public List<Album> allAlbums(){
        System.out.println(albumRepository.findAll().toString());
        return albumRepository.findAll();
    }

    public Optional<Album> singleAlbum(String id){
        return albumRepository.findAlbumBySpotifyId(id);
    }

    public Album createAlbum(String spotifyId, String albumTitle, String releaseDate, String spotifyLink, String artists, String poster, String numSongs){
        Album album = albumRepository.insert(new Album(spotifyId, albumTitle, releaseDate, spotifyLink, artists, poster, numSongs));

        return album;
    }
}
