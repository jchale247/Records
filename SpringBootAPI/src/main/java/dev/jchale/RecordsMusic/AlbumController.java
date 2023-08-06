package dev.jchale.RecordsMusic;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/albums")
public class AlbumController {
    @Autowired
    private AlbumService albumService;

    @GetMapping
    public ResponseEntity<List<Album>> getAllAlbums(){
        return new ResponseEntity<List<Album>>(albumService.allAlbums(), HttpStatus.OK);
    }

    @GetMapping("/{spotifyId}")
    public ResponseEntity<Optional<Album>> getSingleAlbum(@PathVariable String spotifyId){
        return new ResponseEntity<Optional<Album>>(albumService.singleAlbum(spotifyId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Album> createAlbum(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Album>(albumService.createAlbum(payload.get("spotifyId"), payload.get("albumTitle"), payload.get("releaseDate"), payload.get("spotifyLink"), payload.get("artists"), payload.get("poster"), payload.get("numSongs")), HttpStatus.CREATED);
    }
}
